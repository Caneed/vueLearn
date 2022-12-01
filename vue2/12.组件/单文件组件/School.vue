<!--单文件组件的定义-->


<!--单文件组件的结构-->
<template>
  <div class="msg">message:{{msg}}</div>
  <div class="name">name:{{name}}</div>
  <div class="address">address:{{address}}</div>
  <button>获取信息</button>
  <button>获取名</button>
  <button>获取地址</button>
</template>

<!--组件的交互-->
<script>
//暴露接口
//默认  暴露
export default {
  name:'school',
   data(){
     return{
       msg:'hello',
       name:'十八中',
       address:'人民路'
     }
   },
   methods:{
     getMsg(){
       console.log(this.msg)
     },
     getName(){
       console.log(this.name)
     },
     getAddress(){
       console.log(this.address)
     }
   }
 }

 // export {school}

</script>

<!--组件的样式-->
<style>
.msg{
  background-color:orange;
}
.name{
background-color: #0a58ca;
}
.address{
  background-color: #0dcaf0;
}
</style>