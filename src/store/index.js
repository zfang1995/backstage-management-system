import Vue from 'vue'
import vuex from 'vuex'
import vuexPersistedstate from 'vuex-persistedstate'

// import modules
import {i18n_store as i18n} from './modules/i18n'
import routes from './modules/routes'
import openedTabs from './modules/openedTabs'
import userMeta from './modules/userMeta'


Vue.use(vuex)
export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [new vuexPersistedstate({
    paths: ['userMeta', 'openedTabs.pathsOfOpenedTabs']
  })],
  modules: {
    i18n, routes, openedTabs, userMeta
  }
})