import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import axios from 'axios'
import 'babel-polyfill'
import localforage from 'localforage'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.prototype.$axios = axios
Vue.prototype.$localforage = localforage
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
