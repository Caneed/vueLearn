<template>
  <h1>我是Page2，我传的参数为:{{param}}</h1>
</template>

<script>
export default {
  name: "Page2",
  data(){
    return {
      param:''
    }
  },
  mounted() {
    // this.$route 当前路由对象
    // this.$index 全局路由器对象
    console.log(this.$route)
    this.name = this.$route.params
  }
}
</script>

<style scoped>

</style>