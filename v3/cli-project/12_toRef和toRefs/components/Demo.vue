<template>
  <h3>人的信息:</h3>
  <div>姓名:{{name}}</div>
  <div>年龄:{{age}}</div>
  <div>薪资:{{salary.j.m.num}}K</div>
  <button @click="name+=`~`">姓名+~</button>
  <button @click="age++">年龄++</button>
  <button @click="salary.j.m.num++">薪资++</button>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "Demo",

  setup() {
    //使用reactive来声明响应式的对象
    let person=reactive({
      name:'张三',
      age:15,
      salary:{j:{m:{
        num:13
          }}}
    })
    // return {
    //   person
    // }
    //-----------------------------
    // //toRef可以将不是refImpl的基本变量变成Ref
    // //toRef的本质是将常量的指向改变到reactive对象中的某个属性中,而ref是真正的创建ref响应式数据
    // const name2=toRef(person,'name')
    // const age2=toRef(person,'age')
    // const salary=toRef(person.salary.j.m,'num')
    // //此时将转化为ref的常量暴露出去,在模板中就不需要使用xxx.xxx的形式了
    // return{
    //   name:name2,age:age2,salary
    // }

  //  toRefs可以将整个对象变成一个reactive对象，在return中暴露它时直接将它...扩展就可以了
  //   const x=toRefs(person)
    return {
      // ...x
      ...toRefs(person)
    }
  },
}
</script>

<style scoped>

</style>