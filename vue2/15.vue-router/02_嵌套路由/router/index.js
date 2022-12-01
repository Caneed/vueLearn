import vueRouter from 'vue-router'


const routes = [{
    path: '/', component: () => import('@/views/Home.vue'),
}, {
    path: '/About', component: () => import('@/views/About.vue'),
    //注册嵌套子路由
    children: [
        {
            //子路由的路径配置不需要"/"
            path: 'news',
            component:()=>import('@/views/News.vue'),
        },
        {
            //子路由的路径配置不需要/
            path: 'others',
            component:()=>import('@/views/Others.vue')
        }
    ]
}]
//创建路由器
const router = new vueRouter({
    routes,
})

export default router