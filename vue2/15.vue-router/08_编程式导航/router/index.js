import vueRouter from 'vue-router'


const routes = [{
    path: '/',
    component: () => import('@/views/Home.vue'),
//    可以使用name来进行命名路由的命名
    name: 'main',
}, {
    path: '/About',
    component: () => import('@/views/About.vue'),
    name: 'sub',
    children:[
        {
            path:'News',
            name:'news',
            component:()=>import('@/views/News.vue')
        },
        {
            path:'Message',
            name:'message',
            component:()=>import('@/views/Message.vue')
        }
    ]
}]
//创建路由器
const router = new vueRouter({
    routes,
})

export default router