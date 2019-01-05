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
import {i18n_store, messages} from './store/modules/i18n'
import VueI18n from 'vue-i18n'

Vue.use(Antd)
Vue.use(vueComponentPopup)
Vue.use(VueI18n)

Vue.prototype.$axios = axios
Vue.prototype.$localforage = localforage
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n: new VueI18n({
    locale: i18n_store.state.userPreferedLanguage,
    messages
  }),
  render: h => h(App)
}).$mount('#app')
