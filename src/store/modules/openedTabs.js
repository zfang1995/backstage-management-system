
export default {
  state: {
    openedTabs: [],
    pathsOfOpenedTabs: [],
    selectedTab: null,
    previouslySelectedTab: null
  },
  mutations: {
    addATab: ({openedTabs, pathsOfOpenedTabs}, tabRoute) => {
      tabRoute.meta.showing = true
      openedTabs.push(tabRoute)
      pathsOfOpenedTabs.push(tabRoute.fullPath)
    },
    removeATab: ({openedTabs, pathsOfOpenedTabs}, tabRoute) => {
      let index = pathsOfOpenedTabs.findIndex(element => element === tabRoute.fullPath)
      pathsOfOpenedTabs.splice(index, 1)
      openedTabs[index].meta.showing = false
      openedTabs.splice(index, 1)
    },
    selectATab: (state, tabRoute) => {
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
      if (state.selectedTab === tabRoute) $router.go(-1)
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