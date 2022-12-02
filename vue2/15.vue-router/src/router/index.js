import vueRouter from 'vue-router'


const routes = [{
    path: '/', component: () => import('@/views/Home.vue')
}, {
    path: '/About', component: () => import('@/views/About.vue'),
    children:[{
        path:'News',
        name:'news',
        component:()=>import('@/views/News.vue'),
        props:true
    },{
        path:'Message',
        name:'message',
        component:()=>import('@/views/Message.vue')
    }]
}]
//创建路由器
const router = new vueRouter({
    routes,
})

export default router