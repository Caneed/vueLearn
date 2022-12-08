<template>
  <h2>X.Y:{{x.y}}</h2>
  <button @click="x.y++">x++</button>
  <hr>
  <h3>人的信息:</h3>
  <h3>{{ person }}</h3>
  <div>姓名:{{name}}</div>
  <div>年龄:{{age}}</div>
  <div>薪资:{{salary.j.m.num}}K</div>
  <button @click="name+=`~`">姓名+~</button>
  <button @click="age++">年龄++</button>
  <button @click="salary.j.m.num++">薪资++</button>
</template>

<script>
import {reactive, shallowReactive, shallowRef, toRefs} from "vue";

export default {
  name: "Demo",

  setup() {
    //shallowReactive指的是浅层次的响应式数据,嵌套了多个层次的对象不会被修改,
    //只考虑了第一层的响应式
    // let person=shallowReactive({
    let person=reactive({
      name:'张三',
      age:15,
      salary:{j:{m:{
        num:13
          }}}
    })
    //如果是浅层次的话，shallowRef和ref效果一样，如果shallowRef中传入一个对象数据，那么里面的数据就不是响应式的
    let x=shallowRef({
      y:0
    })
    return {
      person,
      x,
      ...toRefs(person)
    }
  },
}
</script>

<style scoped>

</style>