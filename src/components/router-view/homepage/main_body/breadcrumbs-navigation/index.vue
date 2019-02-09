<template>
  <div>
    <a-breadcrumb style="margin: 16px 0" :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes}">
        <span v-if="routes.indexOf(route) === routes.length - 1">{{generateTitle(route.meta.title)}}</span>
        <router-link v-else :to="``">{{generateTitle(route.meta.title)}}</router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
import { generateTitle } from "@/utils/i18n";
export default {
  computed: {
    routes () {
      return this.$route.matched.filter((element, index) => index !== 0)
    }
  },
  methods: {
    generateTitle
  }
};
</script>

<style scoped>
</style>