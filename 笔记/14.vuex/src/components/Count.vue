<template>
  <div>
    <h1>当前的值为:{{ sum }}</h1>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="mutateOdd">为奇数时再加</button>
    <button @click="mutateWait">延迟500ms再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      num: 1,
      sum: 0
    }
  },
  methods: {
    increment() {
      this.sum += this.num
    },
    decrement() {
      this.sum -= this.num
    },
    mutateOdd() {
      if (this.sum % 2)
        this.sum+=this.num
          },
    mutateWait() {
      setTimeout(()=>{
        this.sum+=this.num
      },500)
    }
  }
}
</script>

<style scoped>

</style>