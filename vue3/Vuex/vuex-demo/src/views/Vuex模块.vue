<script setup>
//组合式API中使用store
import {useStore} from 'vuex'

const store=useStore()

function changeStoreName(ev){
  //普通的修改主仓库的状态
  store.dispatch('aName',ev.target.value)
}
function changeSubStoreName(ev){
  //修改带命名空间的state就需要在前面加上命名空间的名称
  store.dispatch('msg/aName',ev.target.value)
}
function changeSubStoreBir(ev){
  //因为birthday脱离了命名空间，所以不需要再前面加命名空间了
  store.dispatch('aBirthday',ev.target.value)
}
//组合式API中无法使用mapState,mapActions,因为组合式API中没有this关键字
</script>


<template>
  <div>
    <h1>Vuex模块</h1>
    <h2>信息:</h2>
    <div>name:{{store.state.name}}</div>
    <div>age:{{store.state.age}}</div>
    <div>sex:{{store.state.sex}}</div>
    <input :value="store.state.name" @input="changeStoreName">
<!--    访问模块的state-->
    <hr>
    <h2>模块引入的值</h2>
<!--    通过store注册的模块来进行模块值的访问-->
    <div>模块的name:{{store.state.msg.name}}</div>
    <div>birthday:{{store.state.msg.birthday}}</div>
    <div>hobbies:{{store.state.msg.hobbies}}</div>
    <input :value="store.state.msg.name" @input="changeSubStoreName" /><br>
    <input :value="store.state.msg.birthday" @input="changeSubStoreBir">
  </div>
</template>


<style scoped>

</style>