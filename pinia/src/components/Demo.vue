<script setup>
//引入在store目录中定义的store(不指定子文件就默认引入index.js)
import {useStore} from "@/store";

//接收store返回的 store,useStore返回的是一个reactive包裹的对象(但是不能进行解构赋值)
const store =useStore()
console.log(store)//proxy{....}
//store中的state可以直接访问
console.log(store.age,store.name,store.count)

//state部分修改
function changePart(){
  //$patch第一种方式
  // store.$patch({
  //   count:store.count+1,
  //   name:store.name+'~',
  //   age:store.age+1,
  //   newMember:'我是新成员'
  // })
//  $patch的第二种方式(函数)
//  函数接收一个回调函数，回调中传入state
  store.$patch((state)=>{
    state.name='你好我是新名字'
  })
//  或者可以直接讲state进行赋值(赋值给一个新对象)
//   store.state={name:'新名字',age:300}
}

</script>

<template>
<!--  可以使用$state来访问state-->
<h1>Store中的state:{{store.$state}}</h1>
  <button @click="store.count++">count++</button>
<!--  可以使用store.$reset这个API来重置store中的state值-->
  <button @click="store.$reset()">重置状态</button>
<!--  可以调用store.$patch来对部分state信息进行修改-->
  <button @click="changePart">部分修改($patch)</button>
</template>

<style scoped>

</style>