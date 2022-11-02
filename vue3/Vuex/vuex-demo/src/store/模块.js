export default {
    //模块中的配置和Vuex的store一样
    state() {
        return {
            name: '李四',
            hobbies: ['basketball', 'football'],
            birthday: '2002-2-2'
        }
    },
    //当模块中有和store中相同的mutations和actions时，为了防止命名冲突，可以设置命名空间
    namespaced: true,
    //严格模式
    strict: true,
    mutations: {
        mName(state, payload) {
            state.name = payload
        },
        mBirthday(state,payload){
            state.birthday=payload
        }
    },
    actions: {
        aName({commit}, payload) {
            commit('mName', payload)
        },
        //    如果在模块中有部分的mutation和action不需要添加命名空间时，就可以将mutation和action的方法写成一个对象，在对象中配置root:true的配置项，表示将此方法注册到根结点上
        aBirthday: {
            root: true,
            handler(context, payload) {
                context.commit('mBirthday', payload)
            }
        }
    },
}