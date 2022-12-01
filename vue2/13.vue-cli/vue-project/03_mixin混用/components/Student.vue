<template>
<div>
  <h2>msg:{{msg}}</h2>
  <div>name:{{name}}</div>
  <div>age:{{age}}</div>
  <div>sex:{{sex}}</div>
  <button @click="show">点击显示</button>
</div>
</template>

<script>
import {mixin} from "@/mixin";
export default {
  name: "Student",
  data(){
    return {
      msg:'i am a student',
      name:'christin',
      age:18,
      sex:'male'
    }
  },
  mixins:[mixin]
}

</script>

<style scoped>

</style>