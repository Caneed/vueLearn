<template>
<div class="category">
  <h3>{{title}}分类</h3>
<!-- 插槽等待组件的使用者进行填充 -->
<!--  <slot>设置插槽默认值，当没有内容插入插槽时会显示此文本</slot>-->

<!--  具名插槽，当有多个插槽时需要加上name属性表示一个具名插槽-->
  <slot name="place1">设置插槽默认值，当没有内容插入插槽时会显示此文本1</slot>
  <slot name="place2">设置插槽默认值，当没有内容插入插槽时会显示此文本2</slot>
</div>

</template>

<script>
export default {
  name: "Category",
  props:['title','listData']
}
</script>

<style scoped>
.category{
  width: 300px;
  background-color: #0dcaf0;
  height: 500px;
}
ul{
  text-decoration: none;
  background-color: orange;
}
</style>