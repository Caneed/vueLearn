<template>
  <div>
<!--    ref-->
<!--    <ref></ref>-->
<!--    计算属性-->
<!--    <computed></computed>-->
<!--    响应式数据-->
<!--    <react></react>-->
<!--    生命周期-->
<!--    <life-circle></life-circle>-->
<!--    依赖注入-->
<!--    <inject></inject>-->
<!--    组件props和事件emit-->
    <props-and-ev></props-and-ev>
  </div>
</template>

<script>
// import ref from '@/components/Ref/ref.vue'
// import computed from '@/components/计算属性.vue'
// import react from '@/components/响应式属性.vue'
// import lifeCircle from '@/components/生命周期.vue'
// import inject from '@/components/依赖注入/依赖注入.vue'
import propsAndEv from '@/components/props和事件/props和事件.vue'

export default {
  name: 'App',
  components: {
    // ref
    // computed
    // react
    // lifeCircle
    // inject
    propsAndEv
  }
}
</script>

<style>
</style>
