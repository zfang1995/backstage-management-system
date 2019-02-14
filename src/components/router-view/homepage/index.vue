<template>
  <a-layout id="homepage">
    <topbar/>
    <a-layout>
      <sidebar></sidebar>
      <main-body/>
    </a-layout>
  </a-layout>
</template>

<script>
import { sidebar, topbar, mainBody } from "@/components";
import {mapGetters} from 'vuex'

export default {
  components: { sidebar, topbar, mainBody },
  computed: {
    ...mapGetters({
      topbarTabsIncludes: 'includes'
    })
  },
  data() {
    return {
      collapsed: false
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('changeLanguageContext', 'homepage.')
    })
  },
  beforeRouteUpdate(to, from, next) {
    if (this.topbarTabsIncludes(to)) {
      this.$store.commit('selectATab', to)
    }
    else {
      this.$store.dispatch('openNewTab', to)
    }
    next()
  }
};
</script>

<style>
#homepage {
  height: inherit;
}
</style>
