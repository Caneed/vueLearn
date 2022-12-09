<script setup>
import {ref} from "vue";

let isShow = ref(false)
</script>

<template>
  <button @click="isShow=true">点击弹窗</button>
  <!--  将想要传送走的组件结构放到teleport标签中,to指的是传送到哪里-->
  <!--  一般用于模态框的弹出-->
  <Teleport to="body">
    <div class="dialog" v-if="isShow">
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <div>内容</div>
      <button @click="isShow=false">关闭</button>
    </div>
  </Teleport>
</template>

<style scoped>
.dialog {
  background-color: green;
  width: 300px;
  height: 300px;
}
</style>