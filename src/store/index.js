import Vue from 'vue'
import vuex from 'vuex'
import {i18n_store} from './modules/i18n'


Vue.use(vuex)
export default new vuex.Store({
  modules: {
    i18n_store
  },
  state: {
    
  }
})