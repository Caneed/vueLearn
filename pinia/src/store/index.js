//引入定义Store的API
import {defineStore} from "pinia";

//defineStore传入两个参数，第一个是store的唯一标识(id),第二个是配置项
export const useStore=defineStore('main',{
//    options....
//    1.state配置项,作为一个函数并返回state的值
    state:()=>{return {
        name:'张三',
        count:0,
        age:18
    }}
})