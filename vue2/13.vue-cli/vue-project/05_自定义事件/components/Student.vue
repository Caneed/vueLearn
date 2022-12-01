
<template>
<div>
  <h2>msg:{{msg}}</h2>
  <div>name:{{name}}</div>
  <div>age:{{age}}</div>
  <div>sex:{{sex}}</div>
<!--  绑定点击事件，在点击事件中触发自定义事件-->
  <button @click="sendStuMsg">点击把学生名传给APP</button>
  <button @click="offSend">点击解绑事件</button>
</div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:'i am a student',
      name:'christin',
      age:18,
      sex:'male'
    }
  },
  methods:{
    sendStuMsg(){
      //在此触发父组件给student组件中定义的一个自定义事件send，在$emit中第一个参数表示触发自定义事件的名称，后面的参数表示该方法传递的参数
      this.$emit('send',this.name)
    },
    offSend(){
      //解绑send事件
      this.$off('send')
      //解绑多个事件时要传一个数组
      // this.$off(['send','evName','evName2',...])
    //  解绑所有自定义事件(不传参数)
    //   this.$off()
    //  或者直接调用$destroy将组件实例销毁
    //   this.$destroy()
    }
  }
}

</script>

<style scoped>
div{
  background-color: #0dcaf0;
  margin: 5px;
  color:#000000;
}
</style>