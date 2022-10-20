<template>
<h1>name:{{name}}</h1>
<h1>address:{{address}}</h1>
</template>

<script>
export default {
  name: "School",
  data(){
    return{
      name:'CQJTU',
      address:'ChongQing'
    }
  }
}
</script>

<style scoped>
h1{
  color:red;
}
</style>