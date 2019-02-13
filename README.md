# my-management-system
临摹自 https://github.com/PanJiaChen/vue-element-admin ，使用 ant-design-vue 代替了 element-ui。
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

## 技术栈
### 视图模型
* vue
* vue-router
* vue-ant-design
### 数据管理
* vuex
### 脚本预处理器
* postcss
* scss
### 自动测试
* mocha

# 工程文件目录结构设计说明书
```

- src\
| |
| - APP.vue
| - assets\ // 存放允许被 `src\` 目录内的任何文件引用的全局资源。
| - components\ // 存放被 APP.vue 直接引用的子组件
| | 
| | - child-component-a\
| | | - index.vue
| | 
| | - child-component-b\
| | - child-component-c\
| | ...
| |
| - router\ // 存放 SPA 的路由配置
| - 

```