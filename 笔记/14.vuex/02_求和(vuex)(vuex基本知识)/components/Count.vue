<template>
  <div>
    <h1>当前的值为:{{ sum }}</h1>
    <h2>经过getters处理后的值:{{ bigSum }}</h2>
    <h3>我在{{ school }}上学,学的是{{ subject }}</h3>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!--    在mapMutations中映射到的方法需要在调用时传参-->
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
<!--    mapActions和mapMutations一样-->
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
    //  将store中的state使用mapState映射到计算属性中
    //  mapState中传入的对象配置 key:value 形式中 key 表示的是要映射的计算属性名称,value 指的是在 store 中的 state 属性名
    //  sum:'sum' 指的是将 store中的state中的 'sum' 映射到计算属性中的 sum
    //   mapState({total:'sum',xue:'school',xueke:'subject'})
    //  mapState返回的是一个对象，其中对象里是映射生成的计算属性函数, 可以使用扩展运算符进行解构
    //   ...mapState({total:'sum',xue:'school',xueke:'subject'})
    //  对象形式配置mapState可以给计算属性取一个和state不一样的名字，如果想直接使用state中的名字，可以使用简写属性(数组)
    ...mapState(['sum', 'subject', 'school']),
    //  ------------------------------------------
    //  mapGetters和mapState使用方法一样
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment() {
    //   //在想要改变store中的状态时可以使用this.$store.dispatch进行改变,传入的参数就是改变的数值
    //   //调用dispatch后会立即调用store中的actions中的指定action函数(这里是increment)
    //   this.$store.commit('mIncrement',this.num)
    // },
    // decrement() {
    //   //如果actions中没有业务逻辑，可以直接commit越过actions
    //   this.$store.commit('mDecrement',this.num)
    // },
    //=======================================================================
    //可以将上面两个commit到mutations中的方法映射到methods中,可以使用mapMutations
    //数组写法时数组中的成员名必须和mutations中的mutation一样
    // ...mapMutations(['mIncrement','mDecrement']),
    //key:value形式生成多个方法,其中key是方法，value是mutation的名称,如果要传参数就在绑定该事件的位置传入参数即可(对象写法)
    ...mapMutations({increment: 'mIncrement', decrement: 'mDecrement'}),
    //---------------------------------------------------
    // mutateOdd() {
    //   //  有业务逻辑操作一般放在actions中去操作
    //   this.$store.dispatch('mutateOdd',this.num)
    // },
    // mutateWait() {
    //   this.$store.dispatch('mutateWait',this.num)
    // }
    //  =======================================================
    //  将调用dispatch的方法使用mapActions进行映射
    //  用法和mapMutations一样
    //   ...mapActions(['mutateWait','mutateOdd'])
    ...mapActions({mutateOdd: 'mutateOdd', mutateWait: 'mutateWait'})
  }
}
</script>

<style scoped>

</style>