<template>
  <div>
<div>about</div>
    <button @click="toMessage">message</button>
    <button @click="toNews">news</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  methods:{
    toMessage(){
      this.$router.push({
        name:'message',
        query:{id:1,name:'我是pushAPI传递过来的参数query'},
        params:{text:'我是传过来的params'}
      })
    },
    toNews(){
      this.$router.push({
        name:'news',
        props:true,
        params:{id:2,name:'我是经过props转化过来的参数'}
      })
    }
  }
}
</script>

<style scoped>

</style>