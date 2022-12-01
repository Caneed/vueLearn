<template>
  <div>

<!--    父组件使用作用域插槽-->
<!--    1.如果是默认插槽，直接在子组件上加上 v-slot="slotProps"来接收传递的参数,slotProps是一个对象，其中的属性就是子组件传入的参数-->
<!--    <Comp v-slot="slotProps">-->
<!--      <template>-->
<!--        {{slotProps.data}}-->
<!--      </template>-->
<!--    </Comp>-->

<!--  2.如果是具名插槽,在template或者在子组件标签上加上 #插槽名="props"来传递参数,或者使用 v-slot:插槽名="props"  -->
    <Comp>
      <template #mySlot="nameProps">
        {{nameProps.data}}
      </template>
    </Comp>
  </div>
</template>

<script>

import Comp from '@/components/Comp.vue'

export default {
  name: 'App',
  components: {
    Comp
  },
}
</script>

<style>
</style>
