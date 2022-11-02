<script setup>
import child from '@/components/依赖注入/child.vue'
import {computed, provide, ref} from "vue";

const theme=ref('light')

//提供一个值，可以被后代组件注入,必须在组件的setup生命周期中进行
//第一个参数是提供的key,第二个是value
provide('theme',computed(()=>theme.value))


</script>


<template>
  <div>
    <div>theme:{{theme}}</div>
    <select v-model="theme">
      <option value="light">亮色</option>
      <option value="dark">暗色</option>
    </select>
    <child></child>
  </div>
</template>


<style scoped>

</style>