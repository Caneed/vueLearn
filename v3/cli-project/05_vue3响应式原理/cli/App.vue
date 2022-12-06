<template>
  <h1>APP</h1>

  <div>信息:姓名:{{job.name}},年龄:{{job.age}}</div>
  <div v-show="job.sex">性别:{{job.sex}}</div>
  <hr>
  <div>类型:{{job.type}},薪资:{{job.salary}}</div>
  <div>多层嵌套对象{{job.a.b.c.d}}</div>
  <div>爱好:{{hobbies}}</div>
  <hr>
<!--  添加属性-->
  <button @click="addSex">添加性别</button>
  <button @click="deleteName">删除姓名</button>
</template>

<script>


import {reactive} from "vue";

export default {
  name: 'App',
  setup() {
    let job = reactive({
      name:'张三',
      age:18,
      type: '前端',
      salary: '30K',
      a: {b: {c: {d: 123}}}
    })
    let hobbies=reactive(['抽烟','喝酒','烫头'])
    function addSex(){
      job.sex='男'
    }
    //vue3中添加或者删除属性可以直接显示在界面上
    function deleteName(){
      job.name=''
    }
    return {
      job,hobbies,deleteName,addSex
    }

  }
}
</script>

<style>
</style>
