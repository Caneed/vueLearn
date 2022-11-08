<script setup>

import child from '@/components/props和事件/child.vue'
import {ref} from "vue";
const users=ref([
  {
    id:0,
    name:'张三',
    age:20,
    sex:'male'
  },
  {
    id:1,
    name:'李四',
    age:22,
    sex:'female'
  },
  {
    id:2,
    name:'王五',
    age:30,
    sex:'male'
  },
])

const value=ref(10)
function removeHandler(id){
  console.log(id)
  let i=users.value.findIndex(item=>item.id===id)
  users.value.splice(i,1)
}
</script>


<template>
  <div>
<!--    通过使用:key="value"将参数当作props传入子组件中-->
<!--    @remove接收子组件定义的remove事件，并将它交给removeHandler来处理-->
    <child :data="users" :value="value" @remove="removeHandler"></child>
  </div>
</template>


<style scoped>

</style>