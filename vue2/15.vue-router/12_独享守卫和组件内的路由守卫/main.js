import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import VueRouter from "vue-router";
//引入路由
import router from "@/router";

Vue.config.productionTip = false
//使用vue-router
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  //使用路由
  router:router
}).$mount('#app')
