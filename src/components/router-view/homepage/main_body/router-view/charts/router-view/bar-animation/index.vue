<template>
  <v-chart :options="data"  :style="{height:'100%',width:'100%'}" autoresize/>
</template>

<script>
import "echarts/lib/chart/bar";
import data from './data'

export default {
  data() {
    return {
      data
    };
  }
};
</script>
