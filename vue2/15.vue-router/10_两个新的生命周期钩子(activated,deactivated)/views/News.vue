<template>
  <div>
  <h3>News</h3>
  <div v-for="item in itemList" :key="item.id">
    <div>id:{{item.id}}</div>
    <div>text:{{item.text}}</div>
    <input type="text"/>
  </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props:['itemList'],
//  路由独有的两个生命周期钩子
//  仅在keep-alive中有效
//  activated指的是该路由被呈现的时候会被调用
//  deactivated则相反
  activated() {
    console.log('现在处于激活状态')
  },
  deactivated() {
      console.log('现在处于不激活状态')
  }
}
</script>

<style scoped>

</style>