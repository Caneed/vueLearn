<template>
<h3>hello i am v1</h3>
  <h3>i am {{name===''?'未命名':name}}</h3>
</template>

<script>
export default {
  name: "v1",
  data(){
    return {
      name:'',
    }
  },
  mounted() {
    this.name=this.$route.query.v1
  }
}
</script>

<style scoped>

</style>