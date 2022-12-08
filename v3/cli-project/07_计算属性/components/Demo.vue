<template>
  <div>
    姓: <input type="text" v-model="person.firstName"/>
    名: <input type="text" v-model="person.lastName"/>
    <div>
      姓名:{{ person.fullName }}
    </div>
    <hr>
    <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    let person = reactive({
      firstName: '张',
      lastName: '三',
      age: 18
    })
    //计算属性(简写)
    //计算属性中传入一个回调
    // person.fullName=computed(()=>{
    //   return person.firstName+'='+person.lastName
    // })
    //完整版写法
    person.fullName=computed({
      get(){
        return person.firstName+' '+person.lastName
      },
      set(value){
        const nameArr=value.split(' ')
        person.firstName=nameArr[0]
        person.lastName=nameArr[1]
      }
    })
    return {
      person
    }
  }
}
</script>

<style scoped>

</style>