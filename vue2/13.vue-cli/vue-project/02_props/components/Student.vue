<template>
<div>
  <h2>msg:{{msg}}</h2>
  <div>name:{{name}}</div>
  <div>age:{{age}}</div>
  <div>sex:{{sex}}</div>
  <div>emo:{{emo}}</div>
  <div>music{{music}}</div>
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
//  子组件通过定义props来接收父组件传递的参数
//  可以通过一个数组接收(第一种接收方式)
//   props:['music','emo']
//  可以通过配置对象来接收,在对象中配置可以规范传入的值类型
//   props:{
//     music:String,
//     emo:String
//   }
//  最完整的接收方式
//  将每个props当成一个对象，里面可以配置类型，是否必要，还有如果没有传入的话它会设置一个默认值
  props:{
    music:{
      type:String,
      required:true
    },
    emo:{
      type:String,
      default:'sad'
    }
  }
//  注意！接收到的props不允许更改，如果想要更改就在data中定义一个新的数据和props一样，然后更改
}

</script>

<style scoped>

</style>