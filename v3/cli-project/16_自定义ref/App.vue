<template>
  <input type="text" v-model="keyword">
  <h3>{{ keyword }}</h3>
</template>

<script>

import {customRef, ref} from "vue";

export default {
  name: 'App',
  setup() {
    //vue自己的ref
    // let keyword=ref('')
    let keyword = myRef('hello')

    //自定义ref:可以在改变响应式数据的途中进行一系列的逻辑操作,比如防抖和节流等
    function myRef(value) {
      //  使用customRef,可以返回自定义ref,传入的参数是一个函数，在传入的函数中写逻辑,并且该函数必须返回一个对象
      //  返回的对象中必须包含get和set,读取数据时调用get，修改数据时调用set
      //  customRef中的函数接收两个参数:track和trigger
      return customRef((track, trigger) => {
        return {
          get() {
            //get中调用track，追踪数据的改变
            track()
            return value
          },
          set(val) {
            value = val
            //  在set中，将新的值赋给原来的value后，需要调用trigger通知get将新的值显示到页面上(重新解析模板),前提是get中调用了track()
            setTimeout(()=>{
            trigger()
            },500)
          }
        }
      })
    }

    return {keyword}
  }
}
</script>

<style>
</style>
