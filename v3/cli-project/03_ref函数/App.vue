<template>
  <h1>APP</h1>

<!--  在模板中vue3会自动给ref解包，不需要.value来读取-->
  <div>信息:姓名:{{name}},年龄:{{age}}</div>
  <button @click="change">改变</button>
  <hr>
  <div>类型:{{job.type}},薪资:{{job.salary}}</div>
  <button @click="changeJob">改变工作</button>
</template>

<script>



import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    // let name = '张三'
    // let age = 18
    //
    // function change() {
    //   name='李四'
    //       age=20
    //   console.log(name,age)
    // }
    // //  信息改变了但是页面没有实时的刷新,let声明的只是普通的变量

    //vue3中的响应式数据可以使用ref来包裹
    let name=ref('张三')
    let age=ref(18)
    //ref将变量包装成一个引用对象refImpl，这样就变成响应式了

    //改变ref的话需要将ref解包,使用xxx.value='xxx'来改变ref的值
    //此时页面会实时刷新
    function change(){
      name.value='李四'
      age.value=20
    }

    //vue3如果响应式数据是一个对象
    let job=ref({
      type:'前端',
      salary:'20K'
    })
    function changeJob(){
      //ref如果修饰的是一个对象类型，那么它就会将对象里面的成员使用代理proxy来进行封装
      console.log(job.value)
    //  改变对象中的成员
      job.value.type='UI'
      job.value.salary='60K'
    }

    return{
      name,age,change,
      job,changeJob
    }

  }
}
</script>

<style>
</style>
