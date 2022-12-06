<template>
  <!--  vue3中的组件结构可以没有根标签了-->
  <h1>APP</h1>

  <div>信息:姓名:{{name}},年龄:{{age}}</div>
  <button @click="Hello">点击打招呼</button>
</template>

<script>


import {h} from "vue";

export default {
  name: 'App',
  //setup是vue3中的一个新的配置项，是组合式API定义的地方
  //组件中的数据，方法等都要在setup中定义
  setup() {
    //  setup中定义数据可以直接定义变量
    let name = '张三'
    let age = 18

    function Hello() {
      console.log(`你好,我叫${name},我${age}岁了`)
    }

  //  setup中定义的变量需要进行返回才能在模板中使用(常用)
    return{
      name,age,Hello
    }

  //  setup也可以直接返回一个渲染函数(了解)
  //   return ()=>h('h1','我是渲染函数渲染的')

  //  vue3中可以使用vue2的配置，在vue2的方法中可以读取到setup的数据，在setup中读取不到vue2的配置，如果vue2和setup中的配置冲突，以setup为准 
  }
}
</script>

<style>
</style>
