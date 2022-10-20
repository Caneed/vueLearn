import {createRouter, createWebHashHistory} from 'vue-router'
import {h} from "vue";
import Children from "@/components/嵌套路由/Children";

const Page1 = {
    render() {
        return h('h1', null, 'this is page1')
    }
}
const Page2 = {
    render() {
        return h('h1', null, 'this is page2')
    }
}
import Index from "@/components/命名路由/Index";

//定义路由组件

const routes = [
    //普通组件
    {
        path: '/page1', component: Page1
    }, {
        path: '/page2', component: Page2
    },
//    创建懒加载组件
    {
        path:'/lazy',component: ()=>import('@/components/LazyComp.vue')
    },
//    创建动态路由
    {
        //:name表示占位符
        path:'/moveable/:name',component: ()=>import('@/components/moveable')
    },
//    创建嵌套路由
    {
        path:'/subview',component: ()=>import('@/components/嵌套路由/SubView'),
        //  配置子页面
        children:[
            {
                path:'children',
                component:Children
            }
        ]
    },
//    创建编程式导航路由
    {
        path:'/nav',component: ()=>import('@/components/编程式导航/nav')
    },
    {
        path:'/son',component: ()=>import('@/components/编程式导航/son')
    },
    {
        path:'/daughter',component: ()=>import('@/components/编程式导航/daughter')
    },
    {
        path:'/child',component: ()=>import('@/components/编程式导航/child')
    },
//    创建命名路由
    {
        path:'/index',
        //创建一个路由的名字
        name:'Index',
        component:Index,
        children: [{
            path:'page1',
            name:'page1',
            component: ()=>import('@/components/命名路由/Page1.vue')
        },{
            path:'page2/:name',
            name:'path2',
            component:()=>import('@/components/命名路由/Page2')
        }],
    }
]

//创建路由

const router = createRouter({
    history: createWebHashHistory(),
    //将创建好的路由组件引入
    routes: routes
})


//导出路由
export default router