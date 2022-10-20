<template>
<h3>this is v2</h3>
  <h3>i am {{name===''?'未命名':name}}</h3>
</template>

<script>
export default {
  name: "v2",
  data(){
    return{name:''}
  },
  mounted() {
    this.name=this.$route.query.v2
  }
}
</script>

<style scoped>

</style>