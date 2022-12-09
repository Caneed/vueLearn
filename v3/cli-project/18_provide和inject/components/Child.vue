<script setup>
import {inject} from "vue";

let car=inject('car')
</script>

<template>
<h1>child</h1>
  <div>从父亲组件接收到的数据:{{car}}</div>
</template>

<style scoped>

</style>