<template>
  <!--动态显示-->
  <button @click="toC1">C1</button>
  <button @click="toC2">C2</button>
  <!--  vue会在动态组件切换时自动销毁，加上keep-alive会保持它不被销毁-->
  <keep-alive>
    <component :is="component"></component>
  </keep-alive>
</template>


<script>
import {defineAsyncComponent, defineComponent, onDeactivated, shallowRef} from "vue";
//同步引入
import Comp1 from "@/components/动态组件/Comp1.vue";
//异步引入并赋值
const C2 = shallowRef(defineAsyncComponent(() => import('@/components/动态组件/Comp2.vue')))
const C1 = shallowRef(Comp1)
//使用defineComponent来注册动态组件
export default defineComponent({
  data() {
    return {
      //在data中引入C1,C2
      component: C1
    }
  },
  //组件中也引入
  components: {
    C1,
    C2
  },
  methods: {
    toC1() {
      if (this.component !== C1)
        this.component = C1
    },
    toC2() {
      if (this.component !== C2)
        this.component = C2
    }
  },
})
</script>

<style scoped>

</style>