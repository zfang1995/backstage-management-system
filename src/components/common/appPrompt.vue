<template>
  <div v-show="true" class="appPrompt">
    <propmt-component  v-for="(element, index) in propmtComponents" 
      v-bind:key="index" 
      v-bind:component="element.vueComponent"
      v-bind:wrapperStyle="element.wrapperStyle">

    </propmt-component>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import propmtComponent from './promptComponent.vue'

export default {
  components: {propmtComponent},
  computed: {
    ...mapGetters([
      'propmtComponents'
    ])
  }
}
</script>

<style scoped>
  .appPrompt {
    width: 0;
    height: 0;
  }
</style>

