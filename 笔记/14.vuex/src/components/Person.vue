<template>
<div>
  <h1>学校:{{school}}</h1>
   <button @click="aSchool('二中')">点击更改学校名称</button>
  <h2>姓名:{{subject}}</h2>
  <h3>年龄:{{age}}</h3>
  <h4>性别:{{sex}}</h4>
  <h5>学科:{{subject}}</h5>
  <h1>
  Count组件中的数据:
  </h1>
  <div>num:{{sum}}</div>
</div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "Person",
  computed:{
    ...mapState(['school','subject','sex','age','name','sum'])
  },
  methods:{
    ...mapActions(['aSchool']),
        ...mapMutations(['mSchool'])
  }
}
</script>

<style scoped>

</style>