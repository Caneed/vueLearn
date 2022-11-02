<script setup>
//使用defineProps接收此参数,在template中可以直接使用
defineProps(['id'])
</script>


<template>
  <div>
    <h1>布尔模式</h1>
    <div>传入的参数id:{{id}}</div>
<!--    创建命名视图-->
    <router-view name="default"></router-view>
    <router-view name="c1"></router-view>
    <router-view name="c2"></router-view>
  </div>
</template>


<style scoped>

</style>