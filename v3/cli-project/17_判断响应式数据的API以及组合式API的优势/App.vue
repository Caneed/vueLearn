<template>
  <div class="app">
  </div>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref} from "vue";

export default {
  name: 'App',

  setup() {
    //  判断响应式数据的API
    let car = reactive({
      name: 'hello',
      price: 20
    })
    let sum = ref(0)
    let carOnly = readonly(car)
    //  isreadOnly可以判断是否只读
    console.log(isReadonly(carOnly))//true
    //  isRef
    console.log(isRef(sum))//true
    //  isReactive
    console.log(isReactive(car))//true
    //  isProxy
    console.log(isProxy(car))//true
    console.log(isProxy(carOnly))//true
    console.log(isProxy(sum))//false
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>
