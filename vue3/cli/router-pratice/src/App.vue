<template>

  <div>
    <router-link to="/page1">跳到page1</router-link>
    <button @click="$router.push('/page1')"></button>
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

<style>
</style>
