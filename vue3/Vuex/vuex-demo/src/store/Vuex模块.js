import {createStore} from "vuex";
import msg from './模块.js'


const store=createStore({
//    注册模块
    modules:{
    //    以key:value形式引入模块
        msg
    },
    state(){
        return {
            name:'张三',
            age:28,
            sex:'male'
        }
    },
    mutations:{
        mName(state,payload){
            this.state.name=payload
        }
    },
    actions:{
        aName({commit},payload){
            commit('mName',payload)
        }
    }
})

export default store