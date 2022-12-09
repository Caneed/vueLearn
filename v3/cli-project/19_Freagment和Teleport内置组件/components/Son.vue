<script setup>
import Dialog from '@/components/Dialog'
</script>

<template>
  <div class="son">我是Son
<!--    //2.Teleport(传送)-->
<!--    在页面某个子组件需要点击弹窗，但是想要让弹窗出现在页面的正中央，而不受父子组件的影响时，可以使用Teleport将整个弹窗传送走详细操作见Dialog组件-->
    <Dialog/>
  </div>
</template>

<style scoped>
.son {
  padding: 10px;
  background-color: red;
}
</style>