<template>
<div>
<!--  切换路由页面的链接-->
<!--  普通路由链接-->
  <index-link to="/Page1">page1</index-link>
  <br>
  <index-link to="/Page2">page2</index-link>
  <br>
<!--  懒加载链接-->
  <index-link to="/lazy">lazyComp</index-link>
  <br>
<!--  动态路由链接-->
  <index-link to="/moveable/张三">moveable</index-link>
  <br>
<!--  嵌套路由链接-->
  <index-link to="/subview">嵌套路由</index-link>
  <br>
<!--  编程式导航页面跳转-->
  <index-link to="/nav">编程式导航</index-link>
  <br>
  <index-link to="/index">命名式路由</index-link>
<!--  router页面视口展示区域-->
  <index-view></index-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
