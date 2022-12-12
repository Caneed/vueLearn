//引入定义Store的API
import {defineStore} from "pinia";
import {useCartStore} from "@/store/cart";

//defineStore传入两个参数，第一个是store的唯一标识(id),第二个是配置项
export const useStore = defineStore('main', {
//    options....
//    1.state配置项,作为一个函数并返回state的值
    state: () => {
        return {
            name: '张三',
            count: 0,
            age: 18,
            people: [{id: '1', name: '李四'}, {id: '2', name: '王五'}, {id: '3', name: '赵六'}]
        }
    },
    //2.getters选项
    // getter相当于state的一个计算属性,使用getters定义:
    //getters中的配置项可以是一个函数。函数参数为state
    getters: {
        namePlus: (state) => state.name + '新增的值',
        doubleCount: (state) => {
            return state.count * 2
        },
        //    有的getters不会依赖于state而是依赖于getter中的属性，此时使用this来代指getters
        //不过不要设置为箭头函数(this指向)
        doublePlusCount() {
            return this.doubleCount * 2
        },
        //    也可以向getters传递参数,此时getters中返回一个函数
        getNameById: (state) => {
            //在传参的getters中也可以进行数据的存储和变量的创建
            //.............
            return (id) => state.people.find((user) => user.id === id)
        },
        //    也可以通过API来访问其它store中的getter
        getCartState: () => {
            const cartStore = useCartStore()
            return cartStore.purchaseId()
        }
    },
    //actions 相当于组件中的 methods ,一般在actions中定义业务逻辑
    actions: {
        increment(){
            this.count++
        }
    }
})