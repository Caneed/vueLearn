<template>
<div>
<!--  动态组件-->
<!--  <Main></Main>-->
<!--  组合式API基本用法-->
<!--  <BasicCombine></BasicCombine>-->
<!--  计算属性-->
<!--  <computed-component></computed-component>-->
<!--  生命周期-->
<LifeCircleComponent></LifeCircleComponent>
</div>
</template>

<script>

import Main from "@/components/动态组件/main.vue";
import BasicCombine from "@/components/组合式API/基本用法.vue"
import computedComponent from "@/components/组合式API/计算属性.vue"
import LifeCircleComponent from "@/components/组合式API/生命周期.vue"

export default {
  name: 'App',
  components:{
    // Main,
    // BasicCombine,
    // computedComponent
    LifeCircleComponent
  }
}
</script>

<style>

</style>
