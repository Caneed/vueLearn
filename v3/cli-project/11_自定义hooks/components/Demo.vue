<template>
  <h1>num:{{ num }}</h1>
  <button @click="num++">点击+1</button>
  <hr>
  <h2>当前点击鼠标的坐标:{{point.x}},{{point.y}}</h2>
</template>

<script>
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";
//使用自定义hooks
import usePoint from "@/hooks/usePoint";

export default {
  name: "Demo",

  setup() {
    let num = ref(0)


    // let point=reactive({
    //   x:0,
    //   y:0
    // })

    //获取点的坐标并赋值给对象point
    // function getPosition(event){
    //   point.x=event.pageX
    //   point.y=event.pageY
    //   console.log(event.pageX,event.pageY)
    // }
    //
    // onMounted(()=>{
    //   window.addEventListener('click',getPosition)
    // })
    // onBeforeUnmount(()=>{
    //   window.removeEventListener('click',getPosition)
    // })

    let point=usePoint()
    return {
      num,
      point
    }
  },
}
</script>

<style scoped>

</style>