import vueRouter from 'vue-router'


const routes = [{
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta:{title:'主页'}
}, {
    path: '/About',
    component: () => import('@/views/About.vue'),
    meta:{title:'关于'},
    children: [{
        path: 'News',
        name: 'news',
        component: () => import('@/views/News.vue'),
        props: true,
        //    标识
        meta: {isAuth: true,title:'新闻'},
    //    添加一个组件独享的路由守卫,指进入该组件之前
    //    其它的逻辑内容和全局导航守卫相同
        beforeEnter:(to,from,next)=>{
            console.log('进入news之前')
        },
    }, {
        path: 'Message',
        name: 'message',
        component: () => import('@/views/Message.vue'),
        meta: {isAuth: true,title:'消息'}
    }]
}]
//创建路由器
const router = new vueRouter({
    routes,
})
export default router