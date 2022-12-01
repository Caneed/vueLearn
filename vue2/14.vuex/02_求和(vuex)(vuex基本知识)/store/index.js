//导入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
//在此处引入Vuex
Vue.use(Vuex)

//创建state mutations actions(必须选项)
const state = {
    sum: 0,
    school:'十八中',
    subject:'理科'
}
const mutations = {
    mIncrement(state, value) {
        //两个参数分别是state(包装过后并做了数据代理的state),value依旧是初始dispatch传入的值
        // console.log(state,value)
        //在mutation中直接进行state的操作
        state.sum += value
    }, mDecrement(state, value) {
        state.sum -= value
    }, mMutateOdd(state, value) {
        state.sum += value
    }, mMutateWait(state, value) {
        state.sum += value
    }
}
const actions = {
//    在actions中定义相应的action
//    传入的第一个参数是一个上下文，可以理解为一个mini版的store
// //    第二个参数就是dispatch传入的参数
//     increment(context, value) {
//         // console.log('action被调用',context,value)
//         //    在action中调用commit使用mutations中的方法,commit方法就在传入的context上下文中调用
//         context.commit('mIncrement', value)
//     }
     mutateOdd(context, value) {
        // actions中一般需要去做业务逻辑的操作，改变值就交给mutations
        if (context.state.sum % 2) {
            context.commit('mMutateOdd', value)
        }
    }, mutateWait(context, value) {
        setTimeout(() => {
            context.commit('mMutateWait', value)
        }, 500)
    }
}
//创建getters(非必须选项),用于加工state中的属性(类似于计算属性)
const getters = {
    //接收一个参数 state
    //返回值就是加工后的state
    bigSum(state) {
        return state.sum * 10
    }
}
//创建并导出store
export default new Vuex.Store({
    state, mutations, actions,getters
})
