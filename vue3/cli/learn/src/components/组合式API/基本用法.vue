<template>
    <div>count:{{count}}</div>
  <button @click="increase">点击count++</button>
</template>

<script>
//方法一组合式API定义在setup中
import {ref} from "vue";

// export default {
//   name: "基本用法",
  // setup(){
  //   const count=ref(0)
  //   const increase=()=>{
  //     count.value++
  //   }
  //   //最后返回
  //   return {
  //     count,
  //     increase
  //   }
  // }
//   }
export default {
  //或者可以两个结合
  methods:{
    increase(){
      this.count++
    }
  }
}
</script>
<!--方法二：写在带有setup的script标签中，可以直接定义-->
<script setup>
// const count=ref(0)
// const increase=()=>{
//   count.value++
// }
const count=ref()
</script>
<style scoped>

</style>