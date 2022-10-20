<template>

  <div>
    <h1>这是嵌套路由</h1>
    <index-link to="/subview/children">子页面</index-link>
    <index-view></index-view>
  </div>
</template>

<script>
import Children from "@/components/嵌套路由/Children";

export default {
  name: "subView"
}
</script>

<style scoped>

</style>