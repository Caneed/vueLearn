<template>
  <div>
    <h3>news</h3>
    <div>propsID:{{ id }}</div>
    <div>propsName:{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: ['id', 'name']
}
</script>

<style scoped>

</style>