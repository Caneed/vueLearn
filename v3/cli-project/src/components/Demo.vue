<template>
<button @click="test">触发hello事件</button>
<!--  <slot></slot>-->
<!--  <slot name="qwe"></slot>-->
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Demo",
  props:['msg'],
  //vue3中父给子组件绑定了一个事件，子组件中必须声明一个emits配置项来告知父组件已经接收到了此事件
  emits:['Hello'],
  setup(props, context) {
    //setup函数的执行时机:在beforeCreate之前执行，此时的this为undefined
    // console.log(this)//undefined
    //setup接收两个参数,第一个参数是props，需要在组件中先接收才能在里面看到
    // console.log(props)
    //第二个参数是上下文对象,包含了attrs和slots，emit
    //$attrs:如果子组件中没有接收父组件传来的props，那么参数就会被放到attrs中
    // console.log(context.attrs)//proxy{....}
    function test(){
      //context中包含了emit,相当于vue2中的$emit
      context.emit('Hello',666)
    }
    //slots用来接收父组件传给子组件的插槽，并且是子组件中未用<slot>标签接收的插槽
    console.log(context.slots)
    return {
      test
    }
  }
}
</script>

<style scoped>

</style>