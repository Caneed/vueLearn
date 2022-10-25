<template>
  <div id="app">
<!--    ref相当于原生的id，vue可以通过ref来进行DOM结点的获取-->
    <div ref="test">message:hello</div>
<!--    普通组件-->
<!--    给子组件添加ref，输出的是子组件的VueComponent实例对象-->
<!--    如果给组件添加id，输出的就是组件的DOM结构-->
    <School ref="school"></School>
    <button @click="getDOM">点我获取School组件和上面的divDOM元素</button>
  </div>
</template>

<script>
import School from '@/components/School.vue'

export default {
  name: 'App',
  components: {
    School,
  },
  methods:{
    getDOM(){
      //ref都存在this.$refs
      console.log(this.$refs)
    }
  }
}
</script>

<style>
</style>
