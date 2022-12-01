<template>
  <div>
<!--    路由切换模式,通过replace或者:replace="true"来切换路由切换的模式,默认模式为push-->
    <router-link replace to="/">Home</router-link>
    <br>
    <router-link :replace="true" to="/About">About</router-link>
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
