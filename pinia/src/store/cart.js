import {defineStore} from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            purchases:[{id:1,name:'洗脸盆'},{id:2,name:'冰箱'},{id:3,name:'电视'}]
        }
    },
    getters:{
        purchaseId(state){
            return ()=>{return state.purchases.map((item)=>item.id)}
        },
        getPurchaseId:(state)=>{
        return state.purchases.map(item=>item.id)}
    }
})