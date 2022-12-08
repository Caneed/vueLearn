<template>
  <Demo v-if="isShowDemo"/>
  <button @click="isShowDemo=!isShowDemo">点击隐藏/显示</button>
</template>

<script>
import Demo from '@/components/Demo.vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: {Demo},
  setup(){
    let isShowDemo=ref(true)
    return {
      isShowDemo
    }
  }
}
</script>

<style>
</style>
