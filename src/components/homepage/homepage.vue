<template>
  <v-app id="inspire">
    <sidebar v-model="drawer"></sidebar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import sidebar from "./components/sidebar/sidebar.vue";


export default {
  components: {sidebar},
  data () {
    return {
      drawer: null
    }
  }
}
</script>
