<template>
  <div>
    <div>name{{name}}</div>
    <div>address:{{address}}</div>
  </div>
</template>
<script>

export default {
  name: "School",
  data(){
    return {
      name:'十八中',
      address:'人民路'
    }
  },
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log('school接收到了来自student组件传输的数据:',data)
    })
  },
  beforeDestroy() {
    //在组件销毁之前将事件绑定都解绑
    this.$bus.off()
  }
}
</script>

<style scoped>
div{
  background-color: #0dcaf0;
  margin: 5px;
  color: #000;
}
</style>