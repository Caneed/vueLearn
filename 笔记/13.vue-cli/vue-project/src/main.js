import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入插件
import plugin from "@/plugin";
//将插件当作中间件使用
Vue.use(plugin)
new Vue({
  el:'#app',
  render(createElement){
    return createElement(App)
  }
})
