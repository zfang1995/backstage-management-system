<template>
  <a-layout-header class="header">
    <div class="logo"/>
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['0']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item
        v-for="(tabRoute, index) in openedTabs"
        :key="index"
        class="a-menu-item"
      >
        <long-press
          :value="tabRoute"
          :duration="1"
          :on-confirm="cancelATab"
          pressing-text="长按关闭"
          :action-text="null"
          class="long-press"
        >{{internationalize(tabRoute.meta.title)}}</long-press>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["cancelATab", "openNewTab"])
  },
  watch: {},
  computed: {
    ...mapGetters(["openedTabs", "internationalize"])
  },
  mounted () {
    window.console.log(this.$route)
  }
};
</script>

<style scoped>
.long-press {
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>