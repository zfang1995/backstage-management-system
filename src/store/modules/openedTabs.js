
export default {
  state: {
    openedTabs: [],
    pathsOfOpenedTabs: [],
    selectedTab: null,
    previousSelection: [] // type: string array
  },
  mutations: {
    addATab: ({openedTabs, pathsOfOpenedTabs}, tabRoute) => {
      tabRoute.meta.showing = true
      openedTabs.push(tabRoute)
      pathsOfOpenedTabs.push(tabRoute.fullPath)
    },
    removeATab: (state, tabRoute) => {
      let index = state.pathsOfOpenedTabs.findIndex(element => element === tabRoute.fullPath)
      state.openedTabs[index].meta.showing = false
      state.pathsOfOpenedTabs.splice(index, 1)
      state.openedTabs.splice(index, 1)
    },
    selectATab: (state, tabRoute) => {
      // let index = state.pathsOfOpenedTabs.findIndex(element => element === tabRoute.fullPath)
      // state.openedTabs.push(...(state.openedTabs.splice(index, 1)))
      if (state.selectedTab) state.previousSelection.push(tabRoute.fullPath)
      state.selectedTab = tabRoute
    }
  },
  actions: {
    openNewTab: (context, tabRoute) => {
      context.commit('addATab', tabRoute)
      context.commit('selectATab', tabRoute)
    },
    cancelATab ({commit, state}, {tabRoute, $router}) {
      commit('removeATab', tabRoute)
      if (state.selectedTab.fullPath === tabRoute.fullPath) $router.push(state.openedTabs[
        state.openedTabs.length - 1
      ])
    },
    async destroyMessageReceiver () {
      let result = await new Promise(resolve => setTimeout(() => resolve(), 1000))
      return result
    }
  },
  getters: {
    openedTabs (state) {
      return state.openedTabs
    },
    selectedTab (state) {
      return state.selectedTab
    },
    includes (state) {
      return (tabRoute) => {
        if (state.pathsOfOpenedTabs.includes(tabRoute.fullPath)) {
          return true
        }
        else {
          return false
        }
      }
    }
  }
}