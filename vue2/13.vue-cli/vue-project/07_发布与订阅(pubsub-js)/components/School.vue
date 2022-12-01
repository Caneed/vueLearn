<template>
  <div>
    <div>name{{name}}</div>
    <div>address:{{address}}</div>
  </div>
</template>
<script>
//引入pubsub-js
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data(){
    return {
      name:'十八中',
      address:'人民路'
    }
  },
  mounted() {
  //  在生命周期中使用pubsub-js
  //  订阅函数返回一个订阅的id
    this.pubId=pubsub.subscribe('hello',(msg,data)=>{
      console.log('发布了hello，执行了回调,数据是',data,'发布的消息名是:',msg)
    })
  },
  beforeDestroy() {
    //在结束订阅时将订阅id传入
    pubsub.unsubscribe(this.pubId)
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