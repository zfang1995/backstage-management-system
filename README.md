# my-management-system

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
* vue
* vue-router
* vuetify
* postcss

# 文件系统架构
```

- src\
| |
| - assets\ //
| - components\ // 存放 APP.VUE 的子组件和其后代组件所需的公用组件
| | |
| | - child-component-a\
| | | |
| | | - components\ // 存放 child-component-a.vue 的子组件和其后代组件所需的公用组件
| | | - child-component-a.vue
| | |
| | - child-component-b\
| | - child-component-c\
| | ...
| |
| - router\ // 存放 SPA 的路由配置
| - 

```