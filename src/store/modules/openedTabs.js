
export default {
  state: {
    openedTabs: [],
    selectedTab: null,
    previouslySelectedTab: null
  },
  mutations: {
    addATab: ({openedTabs}, tabRoute) => {
      openedTabs.push(tabRoute)
    },
    removeATab: ({openedTabs}, tabRoute) => {
      openedTabs.splice(openedTabs.findIndex(tabRoute), 1)
    },
    selectATab: ({selectedTab, previouslySelectedTab}, tabRoute) => {
      if (previouslySelectedTab) previouslySelectedTab = selectedTab;
      selectedTab = tabRoute
      this.$router.push(tabRoute)
    }
  },
  actions: {
    openNewTab: (context, tabRoute) => {
      context.commit('addATab', tabRoute)
      context.commit('selectATab', tabRoute)
    },
    cancelATab: ({commit}, tabRoute) => {
      commit('removeATab', tabRoute)
      commit('selectATab', tabRoute)
    }
  },
  getters: {
    openedTabs (state) {
      return state.openedTabs
    },
    selectedTab (state) {
      return state.selectedTab
    }
  }
}