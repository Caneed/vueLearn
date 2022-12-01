<template>
  <div>
    <category>
<!--      <img src="/0.jpg" alt="">-->

<!--      使用具名插槽时需要用template标签进行包裹,并指定插槽名:v-slot:插槽名-->
<!--      或者使用简写形式 #插槽名-->
      <template v-slot:place1>
      <img src="/0.jpg" alt="">
      </template>
      <template #place2>
        <div>我是插槽二要插入的标签</div>
      </template>
      <!--  动态插槽名,可以动态的标记插槽名, v-slot:[dynamicName]或者 #[dynamicName] -->
<!--      <template v-slot:[dynamicName]></template>-->
<!--      <template #[dynamicName]></template>-->
    </category>
  </div>
</template>

<script>
import category from "./components/Category";

export default {
  name: 'App',
  components: {
    category
  },
}
</script>

<style>
img{
  width: 100%;
}
</style>
