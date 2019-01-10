import Vue from 'vue'
import vuex from 'vuex'
import {i18n_store as i18n} from './modules/i18n'


Vue.use(vuex)
export default new vuex.Store({
  modules: {
    i18n
  },
  state: {
    
  }
})