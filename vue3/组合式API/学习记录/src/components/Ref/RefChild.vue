<script setup>


import {ref} from "vue";

const count=ref(0)
function increase(){
  count.value++
}
//暴露给父组件
defineExpose({count, increase})
</script>


<template>
  <div>
    <h3>子组件</h3>
    <div>count:{{count}}</div>
    <button @click="increase">count++</button>
  </div>
</template>


<style scoped>

</style>