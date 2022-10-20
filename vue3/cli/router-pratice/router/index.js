import {createWebHashHistory, createRouter} from "vue-router";

const routes=[
    //首页
    {
        path: '/',
        redirect:'/home',
        component: () => import('../src/pages/Home.vue')
    },
    //Page1
    {
        path:'/page1',
        component:()=> import('../src/pages/Page1.vue')
    },
    {
        path:'/page2',
        component:()=>import('../src/pages/Page2.vue'),
        children:[{
            path:'',
            components:{
                v1:()=>import('@/pages/v1.vue'),
                v2:()=>import('@/pages/v2.vue')
            }
        }]
    },
    {
        path:'/page3/:name',
        component:()=>import('@/pages/Page3.vue'),
        children:[{
            path:'',
            components:{
                v1:()=>import('@/pages/v2.vue'),
                v2:()=>import('@/pages/v1.vue')
            }
        }]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router