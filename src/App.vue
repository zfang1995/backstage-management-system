<template>
  <v-app id="app">
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>
<style lang="postcss">
.sss
  color: red
</style>
