<template>
<div>
<!--  通过$route.params来进行接收params中的参数-->
  <div>我是{{$route.params.id}}号detail</div>
  <div>内容是{{$route.params.name}}</div>
</div>
</template>

<script>
export default {
  name: "Detail"
}
</script>

<style scoped>

</style>