<script setup>

import {onErrorCaptured, ref} from "vue";

const isError=ref(false)

//三个参数分别是抛出的错误，错误出现的组件实例，以及错误的源头信息
onErrorCaptured((error,instance,info)=>{
  console.log(error)
  console.log(instance)
  console.log(info)
  //发生错误的时候就将错误显示出来
  isError.value=true
})
</script>


<template>
  <div>
    <template v-if="!isError">
    <slot></slot>
    </template>
    <div v-else>
      <div>错误出现了</div>
    </div>
  </div>
</template>


<style scoped>

</style>