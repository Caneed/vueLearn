<script setup>

//reactive声明响应式对象或者数组
import {reactive, ref, shallowReactive, shallowRef} from "vue";

const count=reactive({name:'张三'})
//count是一个代理对象
// console.log(count)
//访问reactive属性需要.key出来
// console.log(count.name)

const hello=reactive({say: ref('hello')})
//在reactive中的ref会自动解包，不需要.value获取值
// console.log(hello.say)//hello

//reactive可以声明数组形式
const arr=reactive([1,{name:'李四'},ref('hello')])
// console.log(arr)
//数组中的ref不会自动解包
// console.log(arr[0],arr[1].name,arr[2].value)
// 和 ref() 不同，浅层 ref 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。
const obj=shallowRef({name:'王五'})
// console.log(obj)
// console.log(obj.value.name)
const ten=shallowRef(10)
// console.log(ten)

const obj2=shallowReactive({name:'赵四',age:12,sex:'other',count:ref(10)})
console.log(obj2)
</script>


<template>
  <div>
    <div>{{count.name}}</div>
  </div>
</template>


<style scoped>

</style>