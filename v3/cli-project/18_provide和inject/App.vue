<template>
  <div class="app">
    <Child/>
  </div>
</template>

<script>
import {provide, inject, reactive} from "vue";
import Child from '@/components/Child'

export default {
  name: 'App',
  components:{Child},
  setup() {
let car=reactive({name:'13',age:18})
  //  使用provide给所有子组件提供数据，子组件只需要使用inject接收即可
    provide('car',car)
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>
