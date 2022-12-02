<template>
<div>
  <h3>Message</h3>
  <div>name:{{$route.query.name}}</div>
  <div>text:{{$route.query.text}}</div>
</div>
</template>

<script>
export default {
  name: "Message",
  beforeDestroy() {
    console.log('message即将被销毁')
  }
}
</script>

<style scoped>

</style>