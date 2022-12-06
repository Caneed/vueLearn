<template>
  <h1>APP</h1>

<!--  在模板中vue3会自动给ref解包，不需要.value来读取-->
  <div>信息:姓名:{{name}},年龄:{{age}}</div>
  <button @click="change">改变</button>
  <hr>
  <div>类型:{{job.type}},薪资:{{job.salary}}</div>
  <div>多层嵌套对象{{job.a.b.c.d}}</div>
  <div>爱好:{{hobbies}}</div>
  <button @click="changeJob">改变工作</button>
</template>

<script>


import {reactive, ref} from "vue";

export default {
  name: 'App',
  setup() {
    let name = ref('张三')
    let age = ref(18)

    function change() {
      name.value = '李四'
      age.value = 20
    }

    // //ref声明对象类型的数据
    // let job=ref({
    //   type:'前端',
    //   salary:'20K'
    // })
    //一般对象类型的数据都会在reactive中去声明

    let job = reactive({
      type: '前端',
      salary: '30K',
      //  在reactive中设置多层嵌套对象,依然可以直接.到它的值并进行修改
      a: {b: {c: {d: 123}}}
    })
    //  reactive定义数组
    let hobbies=reactive(['抽烟','喝酒','烫头'])

    function changeJob() {

      //用ref修饰的对象类型数据修改时需要用.value
      // job.value.type='UI'
      // job.value.salary='60K'
      //  --------------------
      //  用reactive修饰的对象类型数据
      //  此处没有使用.value,直接输出了proxy代理对象
      console.log(job)
      //  所以修改reactive的时候直接修改，不需要.value了
      job.type = 'UI'
      job.salary = '60K'
      //改变深层嵌套对象
      job.a.b.c.d = 345
    //  改变数组
      hobbies[0]='玩游戏'
    }

    return {
      name, age, change,
      job, changeJob,hobbies
    }

  }
}
</script>

<style>
</style>
