import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    // component:()=>import('@/views/第一个ant-design.vue')
    // component:()=>import('@/views/01_learn.vue')
    component:()=>import('@/views/02_form.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
