import vueRouter from 'vue-router'


const routes = [{
    path: '/',
    component: () => import('@/views/Home.vue'),
//    可以使用name来进行命名路由的命名
    name: 'main',
    children:[
        {
            //:name,和:id是传参的占位符
            path:'detail/:name/:id',
            name:'detail',
            component:()=>import('@/views/Detail.vue')
        }
    ]
}, {
    path: '/About',
    component: () => import('@/views/About.vue'),
    name: 'sub'
}]
//创建路由器
const router = new vueRouter({
    routes,
})

export default router