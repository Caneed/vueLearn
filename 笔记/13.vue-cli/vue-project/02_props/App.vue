<template>
  <div id="app">
<!--    父组件向子组件进行参数传递，直接将参数以k:v的形式写到子组件标签上-->
<!--    也可以使用v-bind传入props-->
    <Student emo="sad" music="netEaseCloud"></Student>
  </div>
</template>

<script>
import Student from "@/components/Student";


export default {
  name: 'App',
  components: {
    Student
  },
}
</script>

<style>
</style>
