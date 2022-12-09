<template>
  <h2>求和:{{ sum }}</h2>
  <button @click="sum++">点击++</button>
  <hr>
  <h3>姓名:{{ name }}</h3>
  <h3>年龄:{{ age }}</h3>
  <h3>薪资:{{ a.salary }}</h3>
  <button @click="name+='11111'">姓名变化</button>
  <button @click="age+=1">年龄变化</button>
  <button @click="a.salary='60K'">涨薪</button>
  <button @click="toRawPerson">输出原始的person</button>
  <button @click="addCar">添加坐骑</button>
  <h3>car:{{ car }}</h3>
</template>

<script>
import {markRaw, reactive, ref, toRaw, toRefs} from "vue";

export default {
  name: "Demo",

  setup() {
    let sum = ref(0)
    let person = reactive({
      name: '张三', age: 18,
      a: {salary: '30K'},
      car: {}
    })

    //将响应式的数据转换为原始数据(解除proxy的包装),可以使用toRaw
    function toRawPerson() {
      console.log(toRaw(person))
      //  toRaw只能处理reactive修饰的数据,ref不行
      //   console.log(toRaw(sum))//RefImpl
    }

    //markRaw:将响应式的对象标记为普通对象，提高性能
    //应用场景，有的数据不想当作响应式数据，或者渲染具有不可变数据的大列表时可以使用markRaw
    let car = {name: 'benz', price: 30}
    car = markRaw(car)

    function addCar() {
      person.car = car
      console.log(car)
    }

    return {
      sum,
      ...toRefs(person),
      toRawPerson,
      addCar
    }
  }
}
</script>

<style scoped>

</style>