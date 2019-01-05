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
### 自动测试
* mocha

# 工程文件系统架构
```

- src\
| |
| - assets\ //
| - components\ // 存放 APP.VUE 的子组件和其后代组件所需的公用组件
| | |
| | - common\ // 存放全局的公用组件
| | - child-component-a\
| | | |
| | | - components\ // 存放 child-component-a.vue 的子组件
| | | - child-component-a.vue
| | |
| | - child-component-b\
| | - child-component-c\
| | ...
| |
| - router\ // 存放 SPA 的路由配置
| - 

```