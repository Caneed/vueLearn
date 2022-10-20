<template>
  <div id="app">
<!--    普通组件-->
    <School></School>
  </div>
</template>

<script>
import School from '@/components/School.vue'

export default {
  name: 'App',
  components: {
    School,
    SlotChild,
    ASyncComp
  },
  data(){
    return {show:false}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
