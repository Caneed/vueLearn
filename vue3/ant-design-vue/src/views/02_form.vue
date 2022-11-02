<script setup>
import {reactive} from "vue";


const form=ref(null)
const formData=reactive({
  name:'张三',
  age:18,
  sex:'male',
  birthday:null,
  desc:'hello world',
  hobbies:['basketball','football'],
  class:''
})

</script>


<template>
  <a-form></a-form>
</template>


<style scoped>

</style>