/* eslint-disable */
// TO-DO
// 1. 
export default {
  state: {
    vueComponents: []
  },
  mutations: {
    ADD_PROMPT_COMPONENT: (state, {vueComponent, wrapperStyle}) => {
      state.vueComponents.push({vueComponent, wrapperStyle})
    },
    CANCEL_A_PROMPT_COMPONENT: (state, vueComponent) => state.vueComponents.splice(state.vueComponents.findIndex(element => element === vueComponent), 1)
  },
  actions: {
    appPrompt: function (context, {vueComponent, timeout = undefined, wrapperStyle = undefined}) {
      if (typeof timeout === 'number') { 
        setTimeout(() => context.commit('CANCEL_A_PROMPT_COMPONENT', vueComponent), timeout) 
      }
      context.commit('ADD_PROMPT_COMPONENT', {vueComponent, wrapperStyle})
      return new Promise((resolve, reject) => {
        
      })
    }
  },
  getters: {
    propmtComponents: state => state.vueComponents
  }
}