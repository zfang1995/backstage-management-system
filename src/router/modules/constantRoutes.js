import {homepage, dashboard, icons, table, charts, polar, pie, treeRadial, loginPage, page404, barAnimation} from '@/components'

export default [
  {
    path: '',
    component: homepage,
    meta: { title: 'homepage' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: dashboard,
        meta: { title: 'dashboard', aIcon: 'dashboard' }
      },
      {
        path: '/icons',
        name: 'icons',
        component: icons,
        meta: { title: 'icons', iconFont: 'icon-gongju' }
      },
      {
        path: '/table',
        component: table,
        meta: { title: 'Table', aIcon: 'table' }
      },
      {
        // vue-schart组件
        path: '/charts',
        component: charts,
        meta: { title: 'charts', aIcon: 'pie-chart' },
        children: [
          {
            path: 'polar',
            component: polar,
            meta: { title: 'polar', aIcon: 'table' }
          },
          {
            path: 'pie',
            component: pie,
            meta: { title: 'pie', aIcon: 'pie-chart' }
          },
          {
            path: 'tree-radial',
            component: treeRadial,
            meta: { title: 'treeRadial', aIcon: 'pie-chart' }
          },
          {
            path: 'bar-animation',
            component: barAnimation,
            meta: { title: 'barAnimation', aIcon: 'bar-chart' }
          }
        ]
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
    component: loginPage,
    meta: { title: 'login' }
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: page404,
    meta: { title: '404' }
  } 
]