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
        meta: {isAuth: true,title:'新闻'}
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

//导航守卫（前置路由守卫），该函数的调用时机是在每个页面被展示的时候(包括初始化)
//该守卫接收三个参数to,from,next
//to:表示要切换的页面，包含了要切换到的路由路径，名称和携带参数等
//from:表示从哪里切换到哪里的起始页面的信息
router.beforeEach((to, from, next) => {
    // console.log(to,from)
//    在调用next之前,守卫会将路由切换进行拦截，此时无法切换到要去的页面,可以通过它来进行路由切换的判断
//     next()

    //根据某种条件进行判断是否有权限访问某个(几个)页面
    // if(to.name==='news'||to.name==='message'){
    //     if(localStorage.school==='十八中'){
    //         next()
    //     }else{
    //         alert('学校名不对，无法访问')
    //     }
    // }else{
    //     next()
    // }

//    在路由配置中可以配置meta元数据，元数据的作用就是辅助导航守卫的判断，它相当于路由的自定义标识
//    在元数据中添加了isAuth的值(布尔类型)
    if(to.meta.isAuth){
        if(localStorage.school==='十八中'){
                    next()
                }else{
                    alert('学校名不对，无法访问')
                }
    }else{
        next()
    }
})

//后置路由守卫,在路由被切换后调用
router.afterEach((to, from)=>{
//    后置路由守卫一般的功能是在切换路由后实现一些效果来使用的
//    比如在每次切换路由后进行页面标题的切换
    document.title=to.meta.title||'demo'
})

export default router