<template>
<div>about</div>
</template>

<script>
export default {
  name: "About",
  //在切换视图时destroyed会被调用，同时被切换出来的视图中的mounted也会被调用
  mounted() {
    console.log('about的mounted')
  },
  destroyed() {
    console.log('about的destroy')
  }
}
</script>

<style scoped>

</style>