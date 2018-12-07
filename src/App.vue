<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import test from '@/components/common/test.vue'

  export default {
    name: 'app',
    components: {

    },
    mounted() {
      this.$popUp({vueComponent: test, wrapperStyle: {'background-color': 'red'}})
      .then(
        () => {this.$popUp({vueComponent: test, wrapperStyle: {'background-color': 'red'}})}
      )
    }
  }
</script>
<style lang="postcss">
/* @import 'vuetify/dist/vuetify.min.css' */
</style>
