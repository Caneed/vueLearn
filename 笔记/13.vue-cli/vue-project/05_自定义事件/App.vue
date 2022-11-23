<template>
  <div id="app">
    <div>app接收到子组件school的传递参数:{{schoolArgv}}</div>
    <div>app接收到子组件student的传递参数:{{studentArgv}}</div>

<!--    2.给student组件添加了一个自定义事件，在student组件中去触发此事件-->
    <Student v-on:send="getStudentName"></Student>
    <hr>
<!--    1.父组件向子组件传递一个props，props是一个函数，通过这样的方式来实现子给父传递参数-->
<!--    4.在自定义组件上使用原生的事件需要使用修饰符.native-->
    <School :getSchoolName="getSchoolName" @click.native="helloSchool"></School>

<!--    3.或者在组件绑定ref，在生命周期中去使用ref调用事件-->
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: 'App' ,
  components: {
    Student,
    School
  },
  data(){
    return {
      schoolArgv:'',
      studentArgv:''
    }
  },
  methods:{
    //定义获取子组件中参数的方法
    getSchoolName(name){
      this.schoolArgv=name
    },
    getStudentName(name){
      this.studentArgv=name
    },
    helloSchool(){
      alert('helloSchool被触发了')
    }
  }
}
</script>

<style>
#app{
  background-color: #6c757d;
  margin: 5px;
  padding: 5px;
  color: #fff;
}
</style>
