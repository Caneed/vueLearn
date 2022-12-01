<template>
<div>
  <div>hello</div>
  <div>我是{{$route.query.id}}号detail</div>
  <div>我的内容:{{$route.query.text}}</div>
</div>
</template>

<script>
export default {
  name: "Detail",
  mounted(){
    //this.$route携带了当前的页面的路由路径，参数等，可以通过它来读取
    //  console.log(this.$route)
  }
}
</script>

<style scoped>

</style>