<template>
  <div>
    <div>Home</div>
    <div v-for="i in listItem" :key="i.id">
<!--      通过params来进行路由传参,在占位符中添加参数-->
<!--      <router-link :to="`detail/${i.name}/${i.id}`">detail{{i.id}}</router-link>-->
<!--      或者可以使用to的对象写法-->
      <router-link :to="{
        name:'detail',
        params:{
          name:i.name,
          id:i.id
        }
      }">detail{{i.id}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      listItem:[{id:1,name:'哈哈哈'},{id:2,name:'呵呵呵'}]
    }
  }
}
</script>

<style scoped>

</style>