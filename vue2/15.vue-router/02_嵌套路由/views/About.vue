<template>
  <div>
<div>about</div>
    <!--  在About路由视图中添加嵌套路由-->
    <h2>嵌套路由</h2>
    <!--  路由链接需要加上父路由的路径-->
    <router-link to="/About/news">News</router-link>
    <router-link to="/About/others">Others</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
}
</script>

<style scoped>

</style>