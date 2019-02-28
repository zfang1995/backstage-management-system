<template>
  <div>
    {{ count }}
  </div>
</template>

<script>

  export default {
    name: 'icons',
    data () {
      return {
        count: 0
      }
    },
    mounted () {
      setInterval(() => {
        this.count++
      }, 1000)
    }
  }
</script>

<style scoped>

</style>