<script setup>


import {inject} from "vue";

//接收来自父组件传入的key
const theme=inject('theme')
</script>


<template>
  <div>
    <h2>子组件</h2>
    <div>接收的theme:{{theme}}</div>
  </div>
</template>


<style scoped>

</style>