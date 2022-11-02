<script setup>

import {useRouter} from "vue-router/dist/vue-router";

const router=useRouter()
function addRouter(){
//参数一为父路由的名称
//  参数二为创建的路由配置
  router.addRoute('index',{
    path:'comp1',
    name:'comp1',
    component:()=>import('@/components/动态路由/comp1.vue')
  })
//  如果参数一缺省，则默认直接在根结点上添加路由
  router.addRoute({
    path:'/comp2',
    name:'comp2',
    component:()=>import('@/components/动态路由/comp2.vue')
  })
}
</script>


<template>
  <div>
    <h1>index</h1>
    <button @click="addRouter">添加路由</button>
    <router-view></router-view>
  </div>
</template>


<style scoped>

</style>