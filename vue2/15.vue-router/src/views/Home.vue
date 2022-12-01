<template>
<div>Home</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('home的mounted')
  },
  destroyed() {
    console.log('home的destroy')
  }
}
</script>

<style scoped>

</style>