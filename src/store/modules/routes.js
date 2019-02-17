import { default as $router , asyncRoutes, constantRoutes } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

function resolveChildren (route) {
  if (route.children) {
    let context = route.path
    route.children = route.children.map(route => {
      route.path = $router.resolve(route.path, context).route.path
      resolveChildren(route)
      return route
    })
  }
}

let permission = {
  state: {
    routes: constantRoutes.map(route => {
      let context = ''
      route.path = $router.resolve(route.path, context).route.path
      resolveChildren(route, context)
      return route
    }),
    addRoutes: []
  },
  mutations: {
    SET_ROUTERS: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.includes('admin')) {
          accessedRouters = asyncRoutes
        } else {
          accessedRouters = filterAsyncRouter(asyncRoutes, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  },
  getters: {
    permitted_routes (state) {
      return state.routes
    }
  }
}

export default permission
