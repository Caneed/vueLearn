<template>
  <div>
    <h2>about</h2>
    <hr>
    <button @click="toNews">News</button>
    <button @click="toMessage">Message</button>
    <hr>

<!--    缓存组件，将keep-alive标签将路由视口包裹，那么此路由视口的所有路由都会被缓存，切换它们时不会被销毁-->
<!--    但是如果外层还有一个路由视口，父视口被销毁，它们还是会被销毁-->
<!--    <keep-alive>-->
<!--    <router-view></router-view>-->
<!--    </keep-alive>-->

<!--    如果加上include属性表示具体要缓存哪个组件，那么除这个组件外的其它组件都会被销毁-->
<!--    需要配置name属性，include包括的是组件的名字-->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>

<!--    如果要缓存某几个组件，那么就将它写成数组的形式-->
<!--    <keep-alive :include="['News','Message']"><router-view></router-view></keep-alive>-->
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
  }
}
</script>

<style scoped>

</style>