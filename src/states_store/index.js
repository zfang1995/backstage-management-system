import Vue from 'vue'
import vuex from 'vuex'
import appPrompt from './modules/appPrompt'

Vue.use(vuex)
export default new vuex.Store({
  modules: {
    appPrompt
  }
})