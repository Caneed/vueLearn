<script setup>
//引入在store目录中定义的store(不指定子文件就默认引入index.js)
import {useStore} from "@/store";
import {useCartStore} from "@/store/cart";


//接收store返回的 store,useStore返回的是一个reactive包裹的对象(但是不能进行解构赋值)
const store = useStore()
console.log(store)//proxy{....}
//也可以创建第二个store
const cartStore=useCartStore()
console.log(cartStore)


//1.state部分============================================
//store中的state可以直接访问
console.log(store.age, store.name, store.count)

//state部分修改
function changePart() {
  //$patch第一种方式
  // store.$patch({
  //   count:store.count+1,
  //   name:store.name+'~',
  //   age:store.age+1,
  //   newMember:'我是新成员'
  // })
//  $patch的第二种方式(函数)
//  函数接收一个回调函数，回调中传入state
  store.$patch((state) => {
    state.name = '你好我是新名字'
  })
//  或者可以直接讲state进行赋值(赋值给一个新对象)
//   store.state={name:'新名字',age:300}
}

//getters部分=========================
//直接可以通过store来访问getter
console.log(store.namePlus)
</script>

<template>
  <!--  可以使用$state来访问state-->
  <h1>Store中的state:{{ store.$state }}</h1>
  <button @click="store.count++">count++</button>
  <!--  可以使用store.$reset这个API来重置store中的state值-->
  <button @click="store.$reset()">重置状态</button>
  <!--  可以调用store.$patch来对部分state信息进行修改-->
  <button @click="changePart">部分修改($patch)</button>
  <hr>
  <!--  可以直接访问store中的getters-->
  <h1>store中的getters(依赖于state):{{ store.namePlus }},{{ store.doubleCount }}</h1>
  <h2>getters(依赖于getters中其它属性):{{ store.doublePlusCount }}</h2>
  <hr>
  <!--  向getter中传递参数-->
  <h1>所有people:</h1>
  <h3>{{store.people}}</h3>
  <h1>通过id查找people:</h1>
  <h3>查找到的用户:{{store.getNameById('1')}}</h3>
  <hr>
  <h1>得到其它store的属性:{{store.getCartState()}}</h1>
  <h3>{{cartStore.getPurchaseId}}</h3>
</template>

<style scoped>

</style>