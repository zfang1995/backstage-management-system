<template>
  <v-chart :options="options" :style="{height:'100%',width:'100%'}" autoresize/>
</template>

<script>
import "echarts";
import flare from './flare'

export default {
  data() {
    return {
      options: {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [flare],

                top: '18%',
                bottom: '14%',

                layout: 'radial',

                symbol: 'emptyCircle',

                symbolSize: 7,

                initialTreeDepth: 3,

                animationDurationUpdate: 750

            }
        ]
    }
    };
  }
};
</script>
