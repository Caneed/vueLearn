
<template>
<div>
  <h2 ref="msg" id="msg">msg:{{msg}}</h2>
  <div>name:{{name}}</div>
  <div>age:{{age}}</div>
  <div>sex:{{sex}}</div>
  <button @click="changeMsg">更改msg</button>
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
    changeMsg(){
      //$nextTick的使用场景：在更改DOM结点后如果立即访问更改结点的内容，内容不会改变，它还是原来的内容
      this.msg='i am not a student'
      //i am a student
      console.log(this.$refs['msg'].innerHTML)
    //  nextTick就解决了这个问题
      this.$nextTick(()=>{
        console.log(this.$refs['msg'].innerHTML)
      })
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