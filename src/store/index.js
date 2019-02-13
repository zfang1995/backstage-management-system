import Vue from 'vue'
import vuex from 'vuex'
import {i18n_store as i18n} from './modules/i18n'
import permission from './modules/permission'
import openedTabs from './modules/openedTabs'

Vue.use(vuex)
export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    i18n, permission, openedTabs
  }
})