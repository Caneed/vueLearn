<template>

  <div>
    <router-link to="/page1">page1</router-link>
    <button @click="$router.push('/page2')">page2</button>
    <button @click="$router.push('/page3/张三?v1=我是v1&v2=我是v2')">page3</button>
    <router-view style="border: 1px solid #e1e1e1"></router-view>
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
