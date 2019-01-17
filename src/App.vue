<template>
  <div id="app">
    <a-locale-provider :locale="languagePackage">
      <router-view></router-view>
   </a-locale-provider> 
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    components: {

    },
    mounted() {

    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['languagePackage'])
    }
  }
</script>
<style>

#app {
  height: 100vh;
  width: 100vw;
}
.anticon {
  font-size: 24px;
  /* color: white; */
}
</style>
