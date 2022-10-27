<template>
 <h1>双向绑定</h1>
  <!--  表单控制-->
<!--  使用v-model绑定-->
  <label >
    姓名
    <input type="text" v-model="name">
  </label><br>
  <label >
    年龄
    <input type="number" v-model="age">
  </label><br>
  <label >
    性别
    <input type="radio"  v-model="sex" value="male">男
    <input type="radio"  v-model="sex" value="female">女
    <input type="radio" v-model="sex" value="other">其他
  </label><br>
  <label >爱好
    <input type="checkbox" v-model="hobbies" value="basketball">打篮球
    <input type="checkbox" v-model="hobbies" value="badmin">羽毛球
    <input type="checkbox" v-model="hobbies" value="football">踢足球
  </label><br>
</template>

<script>
export default {
  name: "双向绑定",
//  直接添加到计算属性
  computed:{
    name:{
      get(){
        return this.$store.state.name
      },
      set(value){
      //  调用dispatch修改
        this.$store.dispatch('aName',value)
      }
    },
    sex:{
      get(){
        return this.$store.state.sex
      },
      set(value){
        //  调用dispatch修改
        this.$store.dispatch('aSex',value)
      }
    },
    age:{
      get(){
        return this.$store.state.age
      },
      set(value){
        //  调用dispatch修改
        this.$store.dispatch('aAge',value)
      }
    },
    hobbies:{
      get(){
        return this.$store.state.hobbies
      },
      set(value){
        this.$store.dispatch('aHobbies',value)
      }
    }
  }
}
</script>

<style scoped>

</style>