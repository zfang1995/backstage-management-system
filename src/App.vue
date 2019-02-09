<template>
  <a-locale-provider :locale="languagePackage">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-locale-provider>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {},
  mounted() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["languagePackage"])
  }
};
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
