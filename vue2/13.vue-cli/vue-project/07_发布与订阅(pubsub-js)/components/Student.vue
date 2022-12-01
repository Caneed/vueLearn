
<template>
<div>
  <h2>msg:{{msg}}</h2>
  <div>name:{{name}}</div>
  <div>age:{{age}}</div>
  <div>sex:{{sex}}</div>
  <button @click="send">兄弟之间通信</button>
</div>
</template>

<script>
//引入pubsub-js
import pubsub from 'pubsub-js'
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
    send(){
      //发布订阅
      pubsub.publish('hello',666)
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