import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            // component: () => import('@/views/home.vue')
            // component:()=>import('@/views/双向绑定.vue')
            component:()=>import('@/views/Vuex模块.vue')
        }
    ]
})

export default router