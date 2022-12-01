<template>
  <div>
    <div>news1</div>
    <div>news2</div>
    <div>news3</div>
    <hr>
    <h3>路由携带参数</h3>
    <div v-for="i in listItem" :key="i.id">
      <!--      在路径后使用?和&来拼接参数-->
      <!--      1.to的字符串结合模板字符串的写法-->
      <!--      <router-link :to="`/About/News/Detail?id=${i.id}&text=${i.text}`">details</router-link>-->
      <!--      2.to的对象写法-->
      <router-link :to="{
        //path表示路由的路径
        path:'/About/news/detail',
        //query表示路由传递的参数
        query:{
          id:i.id,
          text:i.text
        }
      }">details{{i.id}}
      </router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      listItem: [{id: 1, text: 'hello001'}, {id: 2, text: 'hello002'}, {id: 3, text: 'hello003'}]
    }
  }
}
</script>

<style scoped>

</style>