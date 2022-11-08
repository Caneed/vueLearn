<script setup>

//使用defineProps({'data'})来定义props
//props需要进行校验
defineProps({
  //简单校验:只需要校验传入的数据类型
  value:Number,
  //复杂校验:以一个对象的形式进行校验
  data:{
    //校验数据类型，是否必要以及如果没有传入的时候的默认值
    type:Array,
    required:true,
    default(){
      return[{
        name:'默认姓名',
        sex:'male',
        age:30
      }]
    }
  }
})
//在删除事件中通过emit来传给父组件
//首先定义emit表示发出事件
const emit=defineEmits(['remove'])
//参数一是事件名称，参数二到n是传递的参数
function remove(id){
  emit('remove',id)
}
</script>


<template>
  <div>
    <div>value:{{value}}</div>
    <div v-for="item in data" :key="item.id" class="item">
      <div>name:{{item.name}}&nbsp;&nbsp;sex:{{item.sex}}&nbsp;&nbsp;age:{{item.age}}
<!--        绑定删除事件-->
      <button @click="remove(item.id)">删除</button></div>
    </div>
  </div>
</template>


<style scoped>
.item{
  display: flex;
  flex-direction: row;
  margin: 20px;
}
.item>div{
  margin: 20px;
  border: 1px solid #e1e1e1;
}
</style>