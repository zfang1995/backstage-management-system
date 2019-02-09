<template>
  <a-layout id="homepage">
    <topbar/>
    <a-layout>
      <sidebar></sidebar>
      <main-body/>
    </a-layout>
  </a-layout>
</template>

<script>
import { sidebar, topbar, mainBody } from "@/components";

export default {
  components: { sidebar, topbar, mainBody },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style>
#homepage {
  height: inherit;
}
</style>
