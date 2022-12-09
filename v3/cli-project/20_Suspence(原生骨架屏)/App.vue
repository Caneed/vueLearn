<template>
  <div class="app">
    <!--    使用Suspence标签将异步引入的组件标签包裹,它提供两个插槽。
    一个插槽fallback(应急)显示未加载出来组件时的占位符-->
    <!--    另一个插槽default显示真正的组件-->
<!--    插槽名不能任意换-->
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        <div>还没加载出来捏😊</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
//普通静态引入组件
// import Child from '@/components/Child'
//异步引入组件
import {defineAsyncComponent} from "vue";

const Child = defineAsyncComponent(() => import('@/components/Child'))

export default {
  //vue3中新增组件:
  // 3.Suspend(悬停),指在异步引入子组件时，当作子组件的一个占位符
  name: 'App',
  components: {Child},
  setup() {
  }
}
</script>

<style>
.app {
  padding: 10px;
  background-color: gray;
}
</style>
