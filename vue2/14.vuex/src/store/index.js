import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
    sum: 0,
    school:'十八中',
    subject:'理科',
    name:'张三',
    age:18,
    sex:'男',

}
const mutations = {
    mIncrement(state, value) {
        state.sum += value
    }, mDecrement(state, value) {
        state.sum -= value
    }, mMutateOdd(state, value) {
        state.sum += value
    }, mMutateWait(state, value) {
        state.sum += value
    },
    mSchool(state,value){
        state.school=value
    }
}
const actions = {
     mutateOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('mMutateOdd', value)
        }
    }, mutateWait(context, value) {
        setTimeout(() => {
            context.commit('mMutateWait', value)
        }, 500)
    },
    aSchool(context,value){
         context.commit('mSchool',value)
    }
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    state, mutations, actions,getters
})
