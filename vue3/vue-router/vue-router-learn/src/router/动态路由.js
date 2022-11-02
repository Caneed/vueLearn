import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";



const router=createRouter({
    history:createWebHashHistory(),
    routes:[{
        //创建动态路由需要添加name属性
        path:'/',
        name:'index',
        component:()=>import('@/components/动态路由/index.vue')
    }]
})

export default router