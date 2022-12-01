import vueRouter from 'vue-router'


const routes = [{
    path: '/', component: () => import('@/views/Home.vue')
}, {
    path: '/About', component: () => import('@/views/About.vue')
}]
//创建路由器
const router = new vueRouter({
    routes,
})

export default router