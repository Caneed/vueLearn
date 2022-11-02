<script setup>
//在meta组件中首先接收到route对象
import {useRoute} from "vue-router/dist/vue-router";

const route=useRoute()
//传入的meta标签就在route对象的meta属性中
console.log(route)
</script>


<template>
  <div>
    <h2>meta元数据模式</h2>
    <div>标题:{{route.meta.title}}</div>
    <div>内容:{{route.meta.content}}</div>
  </div>
</template>


<style scoped>

</style>