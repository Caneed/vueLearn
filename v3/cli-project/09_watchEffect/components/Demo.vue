<template>
  <h1>num:{{ num }}</h1>
  <button @click="num++">点击+1</button>
  <hr>
  <h2>信息:{{ msg }}</h2>
  <button @click="msg+='1'">点击改变信息</button>
  <hr>
  <hr>
  <h3>监视reactive数据</h3>
  <div>姓名:{{ person.name }}年龄:{{ person.age }}</div>
  <div>深度嵌套数据:{{ person.a.b.c }}</div>
  <button @click="person.a.b.c++">改变嵌套信息</button>
  <button @click="changeRea">改变信息</button>
</template>

<script>
import {reactive, ref, watch, watchEffect} from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    let num = ref(0)
    let msg = ref('hello')
    let person = reactive({
      name: '张三',
      age: 18,
      a: {b: {c: 3}}
    })

    function changeRea() {
      person.name += '1'
      person.age += 1
    }
    //监视属性
    // watch(num,(newValue,oldValue)=>{},{})

    watchEffect(()=>{
      //回调会自动调用一次
      console.log('watchEffect回调')
      //在回调中，如果使用了某个响应式数据，那么就会自定监视此数据并调用该回调函数
      const x=num.value
    })
    return {
      num, msg, person, changeRea
    }
  }
}
</script>

<style scoped>

</style>