<template>
  <h1>num:{{ num }}</h1>
  <button @click="num++">点击+1</button>
  <hr>
  <h2>信息:{{ msg }}</h2>
  <button @click="msg+='1'">点击改变信息</button>
  <hr>
  <hr>
  <h3>监视reactive数据</h3>
  <div>姓名:{{ person.name }}年龄:{{ person.age }}</div>
  <div>深度嵌套数据:{{ person.a.b.c }}</div>
  <button @click="person.a.b.c++">改变嵌套信息</button>
  <button @click="changeRea">改变信息</button>
</template>

<script>
import {reactive, ref, watch} from "vue";

export default {
  name: "Demo",

  setup(props, context) {
    let num = ref(0)
    let msg = ref('hello')
    // //监视属性(ref数据)(监视单个数据)
    // watch(num,(newVal,oldVal)=>{
    //   console.log('num变了',oldVal,'=>',newVal)
    // })

    // //监视多个数据时，数据传递使用一个数组来接收
    // //newvalue和oldvalue都变成数组，数组中都分别接收了它们的新旧值
    // watch([num,msg],(newValue,oldValue)=>{
    //   console.log(newValue,oldValue)
    // })

    // //watch加上配置项，在回调函数后加配置项
    // watch([num,msg],(newVal,oldVal)=>{
    //   console.log(oldVal,'=>',newVal)
    // },{immediate:true})

    //------------------------------
    //监视reactive信息
    let person = reactive({
      name: '张三',
      age: 18,
      a: {b: {c: 3}}
    })

    function changeRea() {
      person.name += '1'
      person.age += 1
    }

    // //watch监视reactive数据
    // watch(person,(newValue,oldValue)=>{
    //   console.log(`${oldValue}=>${newValue}`)
    // //  [object Object]=>[object Object]
    // //  watch属性无法监视reactive定义的响应式数据,但是不需要使用deep:truep配置项就可以将深度嵌套的对象来进行监视
    // })

    //监视reactive中的某一个数据,需要把数据写成函数的返回值
    watch(() => person.age, (newValue, oldValue) => {
      //此时可以正常监视
      console.log('age改变了', oldValue, '=>', newValue)
    })

    //如果监视的是一个嵌套对象，需要加上deep:true才能正常监视
    watch(() => person.a, (newValue, oldValue) => {
      console.log('嵌套对象改变了', oldValue, '=>', newValue)
    }, {deep: true})
    return {
      num, msg, person, changeRea
    }
  }
}
</script>

<style scoped>

</style>