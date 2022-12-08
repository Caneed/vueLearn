<template>
  <h1>num:{{ num }}</h1>
  <button @click="num++">点击+1</button>
</template>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

export default {
  name: "Demo",

  // //生命周期(配置项形式)
  /*
   #region
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  //vue2中的beforeDestroy和destroyed被unmount取代了
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
  #endregion
  */

//  生命周期(钩子形式)
  setup() {
    let num = ref(0)
    //组合式API形式的生命周期钩子:
    //在组合式API中 beforeCreate 和 created 都变成了setup
    //如果两个地方都有生命周期，那么setup中的钩子(包括setup)要比配置项形式的对应生命周期快
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })
    onMounted(()=>{
      console.log('onMounted')
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('onUpdated')
    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    })
    onUnmounted(()=>{
      console.log('onUnmounted')
    })
    return {
      num
    }
  },
}
</script>

<style scoped>

</style>