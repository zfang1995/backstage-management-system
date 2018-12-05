<template>
  <div id="app">
    <router-view></router-view>
    <app-prompt></app-prompt>
  </div>
</template>
<script>
  import appPrompt from '@/components/common/appPrompt.vue'
  import { mapActions } from 'vuex';
  import test from '@/components/common/test.vue'

  export default {
    name: 'app',
    components: {
      appPrompt
    },
    methods: {
      ...mapActions(['appPrompt'])
    },
    mounted() {
      // console.log(this.appPrompt)
      this.appPrompt({vueComponent: test, wrapperStyle: {'background-color': 'red'}})

    }
  }
</script>
<style lang="postcss">
/* @import 'vuetify/dist/vuetify.min.css' */
</style>
