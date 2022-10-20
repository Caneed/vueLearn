<template>
  <div>
  <School/>
    <Comp-props :name="李四" :age="18" address="哈哈哈"></Comp-props>
  </div>
</template>

<script>
import School from './components/School'
import CompProps from "@/components/CompProps";

export default {
  name: 'App',
  components: {
    School,
    CompProps
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
