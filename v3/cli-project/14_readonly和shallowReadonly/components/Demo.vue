<template>
  <h2>求和:{{ sum }}</h2>
  <button @click="sum++">点击++</button>
  <hr>
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <h3>薪资:{{a.salary}}</h3>
  <button @click="name+='11111'">姓名变化</button>
  <button @click="age+=1">年龄变化</button>
  <button @click="a.salary='60K'">涨薪</button>
</template>

<script>
import {reactive, readonly, ref, shallowReadonly, toRefs} from "vue";

export default {
  name: "Demo",

  setup() {
    let sum=ref(0)
    //在不想让响应式数据被更改时,可以使用readonly来覆盖之前的响应式数据,此时这个数据就是只读的
    sum=readonly(sum)
    //shallowReadonly值只设置浅层次的只读
    let person=reactive({
      name:'张三',age:18,
      a:{salary:'30K'}
    })
    person=shallowReadonly(person)
    return {
      sum,
      ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>