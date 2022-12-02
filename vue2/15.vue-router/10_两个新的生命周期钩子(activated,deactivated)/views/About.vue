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
  }
}
</script>

<style scoped>

</style>