import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";


const routes=[
    //布尔模式：直接将url中的参数当作组件中的参数
    {
        //传入id参数，在使用的组件中接收
        path:'/booleanMode/:id',
        // path:'/booleanMode',
        component:()=>import('@/components/路由组件传参/布尔模式.vue'),
        //此属性为开启布尔模式
        props:true,
    //    给子视图也可以传递参数
        children:[
            {
                path:'child/:cId',
            //    开启布尔模式传参
                props:true,
            //    命名视图
                components:{
                    default:()=>import('@/components/路由组件传参/布尔模式childDefault.vue'),
                    c1:()=>import('@/components/路由组件传参/布尔模式child1.vue'),
                    c2:()=>import('@/components/路由组件传参/布尔模式c2.vue')
                }
            }
        ]
    },
//    对象模式：以对象模式传参
    {
        path:'/Obj',
        //props以一个对象形式传参,不需要pin路由后的参数,但是参数是静态的，无法改变
        props: {id:200},
        component:()=>import('@/components/路由组件传参/对象模式.vue')
    },
//    函数模式：以函数模式传参，和对象模式的区别是参数不是静态的，可以改变
    {
        path:'/Fn',
        component:()=>import('@/components/路由组件传参/函数模式'),
        //传入的参数是一个route对象
        props:route=>{
            console.log(route)
            //普通传参
            // return {x:200,y:300}
        //    如果url中pin有参数，可以在route对象的query属性中访问到
            return {x:route.query.x,y:route.query.y}
        }

    },
//    meta元数据模式
    {
        path:'/meta',
        component:()=>import('@/components/路由组件传参/meta元数据模式.vue'),
    //    使用meta进行传递元数据
        meta:{title:'meta标题',content:'meta传入的内容'}
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes,

})


export default router