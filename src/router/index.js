import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './modules/constantRoutes'

Vue.use(Router)
export default new Router({
  routes: constantRoutes
})

export {constantRoutes}
export {default as asyncRoutes} from './modules/asyncRoutes'