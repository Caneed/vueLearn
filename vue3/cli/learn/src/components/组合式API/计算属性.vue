<script setup>

import {computed, ref} from "vue";

const USD=ref(10)

const RMB=computed({
  get(){
    return USD.value*7
  },
  set(value){
    RMB.value=USD.value*7
  }
})
</script>


<template>
  <div>
    <div>USD:{{USD}}</div>
    <div>RMB:{{RMB}}</div>
    <input  v-model="USD">
  </div>
</template>


<style scoped>

</style>