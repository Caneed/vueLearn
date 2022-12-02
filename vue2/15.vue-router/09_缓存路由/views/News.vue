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
  props:['itemList']
}
</script>

<style scoped>

</style>