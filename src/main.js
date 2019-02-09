import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import store from './store'
import axios from 'axios'
import 'babel-polyfill'
import localforage from 'localforage'
import vueComponentPopup from './utils/vue-component-popup'
import {i18n} from './store/modules/i18n'
// import '@/assets/styles/index.scss'
import { iconFont } from "@/assets/icons/"
import appLink from "@/assets/appLink"

Vue.use(Antd)
Vue.component('iconFont', iconFont)
Vue.component('appLink', appLink)

Vue.use(vueComponentPopup)


Vue.prototype.$axios = axios
Vue.prototype.$localforage = localforage
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
