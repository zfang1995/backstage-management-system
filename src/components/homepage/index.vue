<template>
  <a-layout id="components-layout-demo-top-side-2">
    <topbar />
    <a-layout>
      <sidebar></sidebar>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <main-body />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import sidebar from './components/sidebar'
import topbar from './components/topbar'
import mainBody from './components/main_body'

export default {
  components: {sidebar, topbar, mainBody},
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
