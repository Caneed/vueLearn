import Vue from 'vue'
import App from './App.vue'
//引入store
import store from '@/store'
//因为在vue脚手架中的import会进行一个执行的提升，在使用store时需要先use(store)然后再创建store实例
//所以引入vuex时需要在store/index.js中引入

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
