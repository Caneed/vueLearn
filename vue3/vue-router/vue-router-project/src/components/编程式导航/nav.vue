<template>
<h1>i am nav</h1>
<!--  入栈式导航-->
  <button @click="$index.push('/son')">入栈式导航</button>
  <button @click="$index.replace('/daughter')">替换式导航</button>
  <button @click="$index.go(-1)">前进或者后退指定页数</button>
  <button @click="$index.forward()">前进</button>
  <button @click="$index.back()">后退</button>
</template>

<script>
export default {
  name: "nav"
}
</script>

<style scoped>

</style>