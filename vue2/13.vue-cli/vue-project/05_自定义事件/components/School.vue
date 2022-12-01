<template>
  <div>
    <div>name{{name}}</div>
    <div>address:{{address}}</div>
    <button @click="sendSchoolName">将学校名传递给app</button>
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
  //子组件在props中接收到父组件传来的参数
  props:['getSchoolName'],
  methods:{
    //定义传参的函数
    sendSchoolName(){
      //调用父组件传来的方法并传参
      this.getSchoolName(this.name)
    }
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