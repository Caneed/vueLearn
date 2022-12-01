<template>
  <div>
<div>about</div>
    <router-link :to="{name:'news'}">news</router-link>|
    <router-link :to="{name:'message'}">message</router-link>
    <hr>
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