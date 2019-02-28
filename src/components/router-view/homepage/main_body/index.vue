<template>
  <a-layout style="padding: 0 24px 24px">
    <breadcrumbs-navigation />
    <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
      <keep-alive :include="$store.getters.namesOfOpenedTabs">
        <router-view></router-view>
      </keep-alive>
    </a-layout-content>
  </a-layout>
</template>

<script>
import {breadcrumbsNavigation} from '@/components'

export default {
    components:{
      breadcrumbsNavigation
    }
  }
</script>

<style scoped>

</style>