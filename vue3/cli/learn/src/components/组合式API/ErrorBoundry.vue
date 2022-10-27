<script setup>

import {ref} from "vue";

const a=ref(0)

function onError(){
  a.value=20
  throw new Error('出现了错误')
}
</script>


<template>
  <div>
    {{a}}
    <button @click="onError">触发错误</button>
  </div>
</template>


<style scoped>

</style>