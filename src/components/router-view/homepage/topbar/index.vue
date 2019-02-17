<template>
  <a-layout-header class="header">
    <div class="logo"/>
    <a-menu
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      @click="routingJump"
      @select="preventDefaultBehavior"
      ref="aMenu"
    >
      <a-menu-item
        v-for="(tabRoute) in openedTabs"
        :key="tabRoute.fullPath"
        :ref="tabRoute.fullPath"
        :class="(selectedTab && selectedTab.fullPath === tabRoute.fullPath) ? 'ant-menu-item-selected' : ''"
      >
        <long-press
          :value="{tabRoute, $router}"
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
    ...mapActions(["cancelATab", "openNewTab"]),
    routingJump ({key}) {
      this.$router.push(key)
    },
    preventDefaultBehavior({selectedKeys}) {
      if (!Object.isFrozen(selectedKeys)) {
        selectedKeys.splice(0, selectedKeys.length)
        Object.freeze(selectedKeys)
      }
    }
  },
  computed: {
    ...mapGetters(["openedTabs", "internationalize", "selectedTab"])
  },
  mounted () {
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
.a-menu-item {
  transition:  all .3s ease;
}
.user-enter, .user-leave-to {
  opacity: 0;
  transform: translate3d(0, 30px);
}
.user-leave-active {
  position: absolute;
}
</style>