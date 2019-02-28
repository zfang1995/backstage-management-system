<template>
  <a-layout-sider
    width="200"
    collapsible
    v-model="collapsed"
    breakpoint="lg"
    :collapsedWidth="collapsedWidth"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <a-menu
      mode="inline"
      :defaultOpenKeys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
      theme="dark"
      @select="preventDefaultBehavior"
    >
      <template v-for="route in homepageRoutes">
        <a-menu-item v-if="!route.children" :key="route.path" :to="route.path" :class="(selectedTab && selectedTab.fullPath === route.path) ? 'ant-menu-item-selected' : ''">
          <app-link :to="route.path" :_slot="'title'" v-if="route.meta">
            <a-icon v-if="route.meta.aIcon" :type="route.meta.aIcon"/>
            <icon-font v-else :type="route.meta.iconFont"></icon-font>
            <span>{{ internationalize(route.meta.title || route.name) }}</span>
          </app-link>
        </a-menu-item>
        <sub-menu v-else :menuInfo="route" :key="route.path" :internationalize="__internationalize()"></sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapGetters } from "vuex";
import { subMenu } from "@/components/";
import path from "path";
import { isExternal } from "@/utils";
// import FixiOSBug from './mixins/fixiOSBug'

export default {
  components: {
    subMenu
  },
  data() {
    return {
      onlyOneChild: null,
      collapsed: false,
      collapsedWidth: 80
    };
  },
  computed: {
    ...mapGetters(["permitted_routes", "sidebar", 'internationalize', "selectedTab"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    homepageRoutes() {
      return this.$store.getters.permitted_routes
              .find(route => {if (route.meta) return route.meta.title === "homepage";})
              .children
    }
  },
  methods: {
    __internationalize () {
      return this.internationalize.bind(this)
    },
    onCollapse() {

    },
    onBreakpoint(isBroken) {
      if (isBroken) {this.collapsedWidth = 0}
      else {this.collapsedWidth = 80}
    },
    hasOneShowingChild(children, parent) {
      if (children) {
        const showingChildren = children.filter(item => {
          if (item.hidden) {
            return false;
          } else {
            // Temp set(will be used if only has one showing child)
            this.onlyOneChild = item;
            return true;
          }
        });

        // When there is only one child router, the child router is displayed by default
        if (showingChildren.length === 1) {
          return true;
        }

        // Show parent if there are no child router to display
        if (showingChildren.length === 0) {
          this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
          return true;
        }
      } else {
        return false;
      }
    },
    resolvePath(routePath) {
      if (this.isExternalLink(routePath)) {
        return routePath;
      }
      return path.resolve(this.basePath, routePath);
    },
    isExternalLink(routePath) {
      return isExternal(routePath);
    },
    preventDefaultBehavior({selectedKeys}) {
      if (!Object.isFrozen(selectedKeys)) {
        selectedKeys.splice(0, selectedKeys.length)
        Object.freeze(selectedKeys)
      }
    }
  }
};
</script>
