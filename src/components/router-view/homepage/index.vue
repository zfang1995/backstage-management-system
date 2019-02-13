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

export default {
  components: { sidebar, topbar, mainBody },
  data() {
    return {
      collapsed: false
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('changeLanguageContext', 'homepage.')
      vm.$store.commit('addATab', to)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit('addATab', to)
    next()
  }
};
</script>

<style>
#homepage {
  height: inherit;
}
</style>
