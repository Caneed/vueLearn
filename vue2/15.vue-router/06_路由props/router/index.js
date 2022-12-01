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
            component:()=>import('@/views/News.vue'),
            //1.对象形式的props
            // props:{id:1,name:'我是props'},
        //    2.布尔模式的props,将组件中的params自动替换为props
        //     props:true,
        //     3.函数形式的props,可以自定义props,函数传入的参数是一个$route,可以通过它来取得params或者query给props进行赋值
            props($route){
                return{id:1,name:'我是props'}
            }
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