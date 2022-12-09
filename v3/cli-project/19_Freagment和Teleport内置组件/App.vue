<template>
  <div class="app">
    <Child/>
  </div>
</template>

<script>
import Child from '@/components/Child'

export default {
  //vue3中新增组件:
  // 1.Fragment(碎片),在vue2中，组件的标签必须要写到一个根标签中，vue3中不需要写到一个根标签中，它是将所有标签写到一个Fragment中，减少了层级的嵌套和内存的占用
  name: 'App',
  components: {Child},
  setup() {
  }
}
</script>

<style>
.app{
  padding: 10px;
  background-color: gray;
}
</style>
