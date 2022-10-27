<template>
  <h1>Home</h1>
  <h2>name:{{$store.state.name}}</h2>
  <input type="text" :value="$store.state.name" @input="changeStoreName"><br>
<!--  表单控制-->
  <label >
    姓名
    <input type="text" :value="sName" @input="actionName($event.target.value)">
  </label><br>
  <label >
    年龄
    <input type="number" :value="sAge"  @input="actionAge($event.target.value)">
  </label><br>
  <label >
    性别
    <input type="radio"  :checked="sSex==='male'" value="male">男
    <input type="radio"  :checked="sSex==='female'" value="female">女
    <input type="radio" :checked="sSex==='other'" value="other">其他
  </label><br>
  <label >爱好
    <input type="checkbox" value="basketball">打篮球
    <input type="checkbox" value="badmin">羽毛球
    <input type="checkbox" value="football">踢足球
  </label><br>

</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
//  通过mapState将store中的属性映射到计算属性中
  computed:{
    //第一种：直接使用一个数组映射
    // ...mapState['name','sex','age']
  //  第二种：接收一个对象，可以将映射来的状态属性附上不同的别名
    ...mapState({
      sName:state=>state.name,
      sSex:state=>state.sex,
      sAge:state=>state.age
    })
  },
  methods:{
    changeStoreName(ev){
    //  通过dispatch调用action修改状态
      this.$store.dispatch('aName',ev.target.value)
    },
  //  mapAction:将store种的action方法映射到方法种
  //  第一种:直接用数组来接
  //   ...mapActions['aSex','aAge','aName']
  //  第二种：用对象来起别名
    ...mapActions({
      actionName:'aName',
      actionSex:'aSex',
      actionAge:'aAge'
    })
  },
}
</script>

<style scoped>

</style>