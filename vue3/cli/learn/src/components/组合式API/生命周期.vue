<script setup>
import {onDeactivated, onErrorCaptured, onMounted} from "vue";
//组合式API中引入的子组件不需要注册，可以直接使用
import ErrorChild from '@/components/组合式API/ErrorChild.vue'
import ErrorBoundry from '@/components/组合式API/ErrorBoundry.vue'

//组件挂载完成时执行的生命周期
onMounted(() => {
      console.log('子组件挂载完成')
}
),

//    在动态组件中，有页面被激活时就会触发该生命周期钩子，前提是该动态组件要保持Keep-alive
    onDeactivated(()=>{
      console.log('动态组件被激活了')
    })
</script>


<template>
  <div>
    <div>content</div>
<!--    触发错误边界时要将它们包裹，因为onErrorCapture捕获的是子组件抛出的错误-->
    <ErrorChild>
      <ErrorBoundry></ErrorBoundry>
    </ErrorChild>
  </div>
</template>


<style scoped>

</style>