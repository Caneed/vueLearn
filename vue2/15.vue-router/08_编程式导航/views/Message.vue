<template>
  <div>
<h3>message</h3>
  <div>id:{{ $route.query.id }}</div>
  <div>name:{{$route.query.name}}</div>
  <div>text:{{$route.params.text}}</div>
  </div>
</template>

<script>
export default {
  name: "Message"
}
</script>

<style scoped>

</style>