<template>
<h1>这是动态路由匹配组件,姓名:{{name}}</h1>
  <h2>参数Query:{{query==={}?'暂无参数':query}}</h2>
</template>

<script>
export default {
  name: "moveable",
  data(){
    return{
      name:'',
      query:''
    }
  },
  mounted() {
    this.name=this.$route.params.name
    if(!this.$route.query!=={})
    this.query=this.$route.query
  }
}
</script>

<style scoped>

</style>