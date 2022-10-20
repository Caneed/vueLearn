<template>
<h2>{{name}}</h2>
<h2>{{age}}</h2>
<h2>{{address}}</h2>
</template>

<script>
export default {
  name: "CompProps",
  // //普通定义props
  // props:[name,age,address],
  //定义props同时进行校验
  props:{
    age:Number,
    // name:String,
    //校验多种数据类型,表示String和NUmber类型都可以
    address:[String,Number],
    //定义多个校验规则
    name:{
      //必填项
      require:true,
      //默认值
      default:'张三',
      type:[String,Boolean]
    }
  }
}
</script>

<style scoped>

</style>