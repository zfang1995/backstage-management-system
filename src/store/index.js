import Vue from 'vue'
import vuex from 'vuex'
import vuexPersistedState from 'vuex-persistedstate'

// import modules
import {i18n_store as i18n} from './modules/i18n'
import routes from './modules/routes'
import openedTabs from './modules/openedTabs'
import userMeta from './modules/userMeta'
import api from './modules/api'

Vue.use(vuex)
export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [new vuexPersistedState({
    paths: ['userMeta', 'openedTabs.pathsOfOpenedTabs']
  })],
  modules: {
    i18n, routes, openedTabs, userMeta, api
  }
})