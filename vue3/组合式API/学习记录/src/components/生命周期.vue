<script setup>

import {onErrorCaptured, onMounted, onUnmounted, onUpdated, ref} from "vue";

const el=ref(0)
//在组件已经挂载完成后调用此函数,传入一个回调函数
//此生命周期钩子在服务端渲染时不会调用
//在每次DOM树重新渲染时都会调用它
onMounted(()=>{
  // console.log('onMounted')
  // console.log(el)//refImp
})
onUpdated(()=>{
  console.log('onUpdated')
})
onUnmounted(()=>{
  console.log('onUnmounted')
})
//捕获到错误的时候调用此声明周期钩子
onErrorCaptured(()=>{

})
function update(){
  el.value++
}

</script>


<template>
  <div>
    <div>{{ el }}</div>
    <button @click="update">el++</button>
  </div>
</template>


<style scoped>

</style>