<template functional>
  <a-sub-menu v-on="listeners" :key="data.key">
    <span slot="title" v-if="data.attrs.menuInfo.meta">
      <a-icon :type="data.attrs.menuInfo.meta.icon"/>
      <span>{{ data.attrs.internationalize(data.attrs.menuInfo.meta.title) }}</span>
    </span>
    <template v-for="route in data.attrs.menuInfo.children">
      <a-menu-item v-if="!route.children" :to="route.path" :key="route.path" :class="(selectedTab && selectedTab.fullPath === route.path) ? 'ant-menu-item-selected' : ''">
        <app-link :to="route.path" :_slot="'title'" v-if="route.meta">
          <a-icon :type="route.meta.icon"/>
          <span>{{ data.attrs.internationalize(route.meta.title) }}</span>
        </app-link>
      </a-menu-item>
      <sub-menu v-else :is-nest="true" :menuInfo="route" :key="route.path" class="nest-menu"></sub-menu>
    </template>
  </a-sub-menu>
</template>