<template>
  <div>
    <h2>about</h2>
    <hr>
    <button @click="toNews">News</button>
    <button @click="toMessage">Message</button>
    <hr>
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    toNews() {
      this.$router.push({
        name: 'news',
        params:{itemList:[{id: 1, text: 'news001'}, {id: 2, text: "news002"}, {id: 3, text: "news003"}]},
        props:true
      })
    },
    toMessage(){
      this.$router.push({
        name:'message',
        query:{name:'message',text:'send by query'}
      })
    }
  },

  //组件内的路由守卫
  //通过路由规则，进入该组件时会被调用
  beforeRouteEnter(to,from,next){
    console.log('进入about(组件内路由守卫)')
    next()
  },
  //通过路由规则，离开该组件时会被调用
  beforeRouteLeave(to,from,next){
    console.log('离开about(组件内路由守卫)')
    //这里调用了next()才会放行离开该页面
    next()
  }
}
</script>

<style scoped>

</style>