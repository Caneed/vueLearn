<template>
  <div>
    <h1>当前的值为:{{ sum }}</h1>
    <h2>经过getters处理后的值:{{ bigSum }}</h2>
    <h1>学校数据</h1>
    <h3>我在{{ school }}上学,学的是{{ subject }},我叫{{name}},我的性别是{{sex}},今年{{age}}岁了</h3>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="mutateOdd(num)">为奇数时再加</button>
    <button @click="mutateWait(num)">延迟500ms再加</button>
  </div>
</template>

<script>
//映射工具
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      num: 1
    }
  },
  computed: {
    ...mapState(['sum', 'subject', 'school',"age",'name','sex']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapMutations({increment: 'mIncrement', decrement: 'mDecrement'}),
    ...mapActions({mutateOdd: 'mutateOdd', mutateWait: 'mutateWait'})
  }
}
</script>

<style scoped>

</style>