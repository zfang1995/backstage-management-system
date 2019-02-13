import * as components from '@/components'

export default [
  {
    path: '',
    component: components.homepage,
    meta: { title: 'homepage' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: components.dashboard,
        meta: { title: 'dashboard', aIcon: 'dashboard' }
      },
      {
        path: '/icon',
        component: components.icon,
        meta: { title: 'icons', iconFont: 'icon-gongju' }
      },
      {
        path: '/table',
        component: components.table,
        meta: { title: 'Table', aIcon: 'table' }
      },
      {
        // vue-schart组件
        path: '/charts',
        component: components.charts,
        meta: { title: 'charts', aIcon: 'pie-chart' }
      }
    ]   
  },

  //     {
  //       path: '/tabs',
  //       component: resolve => require(['../components/page/Tabs.vue'], resolve),
  //       meta: { title: 'tab选项卡' }
  //     },
  //     {
  //       path: '/form',
  //       component: resolve => require(['../components/page/BaseForm.vue'], resolve),
  //       meta: { title: '基本表单' }
  //     },
  //     {
  //       // 富文本编辑器组件
  //       path: '/editor',
  //       component: resolve => require(['../components/page/VueEditor.vue'], resolve),
  //       meta: { title: '富文本编辑器' }
  //     },
  //     {
  //       // markdown组件
  //       path: '/markdown',
  //       component: resolve => require(['../components/page/Markdown.vue'], resolve),
  //       meta: { title: 'markdown编辑器' }
  //     },
  //     {
  //       // 图片上传组件
  //       path: '/upload',
  //       component: resolve => require(['../components/page/Upload.vue'], resolve),
  //       meta: { title: '文件上传' }
  //     },

  //     {
  //       // 拖拽列表组件
  //       path: '/drag',
  //       component: resolve => require(['../components/page/DragList.vue'], resolve),
  //       meta: { title: '拖拽列表' }
  //     },
  //     {
  //       // 权限页面
  //       path: '/permission',
  //       component: resolve => require(['../components/page/Permission.vue'], resolve),
  //       meta: { title: '权限测试', permission: true }
  //     },
  //     {
  //       path: '/403',
  //       component: resolve => require(['../components/page/403.vue'], resolve),
  //       meta: { title: '403' }
  //     }
  //   ]
  // },
  {
    path: '/login',
    component: components.loginPage,
    meta: { title: 'login' }
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: components.page404,
    meta: { title: '404' }
  } 
]