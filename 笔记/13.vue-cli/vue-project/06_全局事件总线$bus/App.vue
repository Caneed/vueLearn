<template>
<!--全局事件总线:可以实现任意组件间的通信-->
<!--  一般在main.js,引入Vue后在Vue的原型对象上添加想要添加的数据-->
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {}
}
</script>

<style>
</style>
