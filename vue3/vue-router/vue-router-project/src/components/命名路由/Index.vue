<template>
  <div>
  <h1>命名路由</h1>
<!--    直接填名字-->
  <button @click="$index.push('page1')">跳到page1</button>
    <index-link to="page1">link方式跳到page1</index-link>
<!--  <button @click="$index.push({name:'page2',params:{name:'占山'}})">跳到page2带参数</button>-->
<!--    <index-link :to="{name: 'page2', params: {name: '真假美猴王'}}">跳到page2link方式</index-link>-->
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>