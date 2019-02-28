# backstage-management-system
模仿自 https://github.com/PanJiaChen/vue-element-admin ，对原项目做了以下变更：  
1. 使用 ant-design-vue 代替了 element-ui。
2. 重新设计了项目文件架构
3. 编写了新的说明文档
4. 使用 vuex-persistedstate 
    
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
* vue-ant-design
### 数据管理
* vuex
* vue-router
### 脚本预处理器
* postcss
* scss
### 自动测试
* mocha

# 工程文件目录结构说明
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