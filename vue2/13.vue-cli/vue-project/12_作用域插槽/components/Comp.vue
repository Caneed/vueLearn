<template>

<!--  在父组件需要子组件通过插槽传递参数时。可以使用作用域插槽，相当于props-->
<!--  1.默认插槽的作用域插槽使用方法-->
  <div>
  <slot :data="mydata"></slot>
<!--    2.具名插槽使用作用域插槽-->
    <slot :data="myDataExtra" name="mySlot"></slot>
  </div>
</template>

<script>
export default {
  name: "Comp",
  data(){
    return{
      mydata:[1,2,3,4,5],
      myDataExtra:['a','b','c','d','e']
    }
  }
}
</script>

<style scoped>

</style>