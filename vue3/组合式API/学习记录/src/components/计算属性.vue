<script setup>
import {ref,computed} from "vue";


const rmb = ref(10)
//声明一个变量接收computed的回调
//里面有get和set
const usd = computed({
  get() {
    return rmb.value * 0.7
  },
  set(value) {
    rmb.value = value / 0.7
  }
})
</script>


<template>
  <div>
    <div>RMB:{{ rmb }}</div>
    <div>USD:{{ usd }}</div>
    <input type="number" v-model="usd">
  </div>
</template>


<style scoped>

</style>