<template>
  <div>
    <a-breadcrumb style="margin: 16px 0" :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes}">
        <span v-if="routes.indexOf(route) === routes.length - 1">{{internationalize(route.meta.title)}}</span>
        <router-link v-else :to="``">{{internationalize(route.meta.title)}}</router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['internationalize']),
    routes () {
      return this.$route.matched.filter((element, index) => index !== 0)
    }
  }
};
</script>

<style scoped>
</style>