import {createWebHashHistory, createRouter} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        //首页
        {
            path: '/',
            component: () => import('../src/pages/Home.vue')
        },
        //Page1
        {
            path:'/page1',
            component:()=> import('../src/pages/Page1.vue')
        },
        {
            path:'/page2',
            component:()=>import('../src/pages/Page2.vue')
        }
    ]
})