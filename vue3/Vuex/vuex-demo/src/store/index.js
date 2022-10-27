import {createStore} from "vuex";

const store = createStore({
    //状态赋值
    state() {
        return {
            name: 'hello',
            age: 18,
            sex: 'male',
            hobbies: ['basketball', 'football']
        }
    },
    //修改状态的方法集合，一个状态至少对应一个mutation方法和action
    mutations: {
        //state指的是当前的状态，payload指的是要修改的值，    是通过actions中的方法传入的
        mName(state, payload) {
            state.name = payload
        },
        mAge(state, payload) {
            state.age = payload
        },
        mSex(state, payload) {
            state.sex = payload
        }
    },
    actions: {
        //传入store对象和负载
        aName(store, payload) {
            //    在actions方法中调用commit去驱动mutation来改变值
            //    commit传入mutation中的方法和负载payload
            store.commit('mName', payload)
        },
        aSex(store, payload) {
            store.commit('mSex', payload)
        },
        aAge(store, payload) {
            store.commit('mAge', payload)
        }

    }
})


export default store