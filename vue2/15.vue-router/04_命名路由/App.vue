<template>
  <div>
<!--    <router-link to="/">Home</router-link>-->
<!--    <br>-->
<!--    <router-link to="/About">About</router-link>-->
<!--    在路由链接上使用to的对象形式.在里面定义name的值为对应命名路由的值-->
    <router-link :to="{name:'main'}">Home</router-link>
    &nbsp;&nbsp;
    <router-link :to="{name:'sub'}">About</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
