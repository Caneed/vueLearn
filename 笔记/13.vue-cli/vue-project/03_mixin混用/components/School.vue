<template>
  <div>
    <div>name{{name}}</div>
    <div>address:{{address}}</div>
    <button @click="show">点击显示</button>
  </div>
</template>
<script>
//将暴露的方法引入
import {mixin} from '../mixin.js'

export default {
  name: "School",
  data(){
    return {
      name:'十八种',
      address:'人民路'
    }
  },
  //使用mixin配置对象来接收传入的方法
  mixins:[mixin]
}
</script>

<style scoped>

</style>