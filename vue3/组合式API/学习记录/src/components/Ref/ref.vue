<script setup>

//ref:获取页面的元素
import {ref} from "vue";
//引入子组件(组合式API中引入就相当于注册)
import RefChild from '@/components/Ref/RefChild.vue'

const input=ref(null)
const input2 = ref(null)
const child=ref(null)
const input3=ref(null)

function getEl(){
  //将ref解包，获取到DOM结点
  console.log(input.value)
}
function getEl2(){
  console.log(input2.value)
}
function getChild(){
  console.log(child.value)
  //可以直接调用子组件方法
  child.value.increase()
}
function getInput3(i){
  console.log(i)
  console.log(input3.value)
  console.log(input3.value[i].value)
}
</script>


<template>
  <div>
<!--    使用ref=input来绑定dom元素-->
    <input type="text" ref="input">
    <button @click="getEl">获取元素</button>
    <hr>
<!--    通过函数形式将ref绑定到DOM上-->
<!--    :ref(el)中el指的是此DOM-->
    <input type="text" :ref="el=>{input2=el}">
    <button @click="getEl2">获取元素2</button>
    <hr>
<!--    可以使用ref来读取子组件-->
    <RefChild :ref="el=>{child=el}"></RefChild>
    <button @click="getChild">读取子组件</button>
    <hr>
    <div v-for="i in 5">
      <input type="text" ref="input3">
      <button @click="getInput3(i)">循环渲染获取DOM</button>
    </div>
  </div>
</template>


<style scoped>

</style>