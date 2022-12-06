<template>
  <Demo msg="hello" school="十八中" @Hello="sayHello" >
    <span>我是子组件的插槽</span>
    <template v-slot:qwe>
      <span>我是具名插槽</span>
    </template>
  </Demo>
</template>

<script>
import Demo from '@/components/Demo.vue'

export default {
  name: 'App',
  components: {Demo},
  setup(){
    function sayHello(value){
      alert(`触发了hello事件，接收到参数为:${value}`)
    }
    return{
      sayHello
    }
  }
}
</script>

<style>
</style>
