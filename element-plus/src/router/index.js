import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'buttons',
    component: () => import('@/views/Buttons.vue')
  },
  {
    path:'/border',
    name:'border',
    component:()=>import('@/views/Border.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
