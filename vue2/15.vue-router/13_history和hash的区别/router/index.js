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
        meta: {isAuth: true,title:'新闻'},
    }, {
        path: 'Message',
        name: 'message',
        component: () => import('@/views/Message.vue'),
        meta: {isAuth: true,title:'消息'}
    }]
}]
//创建路由器
const router = new vueRouter({
    //开启普通历史模式
    mode:'history',
    //哈希和普通历史模式的区别:
    // 1.兼容性问题:哈希兼容性较好,普通历史模式兼容性不如哈希模式
    // 2.普通history模式在前端打包上线，服务器进行请求的时候会将不同的路由页面当作资源向服务器去进行请求，服务器无法请求到不存在的资源就会报404,
    //哈希模式就不会出现这样的问题,因为在哈希模式下,请求资源路径下的'#'后的路径都不会当作资源去请求
    //如果普通历史模式在上线时想要解决此问题，需要在后端使用正则进行匹配路径，并进行资源重定向，或者使用npm包 connect-history-api-callback 去进行解决，也可以使用 nginx 去进行解决
    routes,
})
export default router