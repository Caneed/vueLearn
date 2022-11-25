import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'
//引入store
// import store from '@/store'
//因为在vue脚手架中的import会进行一个执行的提升，在使用store时需要先use(store)然后再创建store实例,
// 所以需要先use然后再进行引入，所以要使用异步引入()=>import('xxx')
const store=()=>import('@/store')

Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(store)
new Vue({
  render: h => h(App),
}).$mount('#app')
