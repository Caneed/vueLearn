import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入插件
import plugin from "@/plugin";
//将插件当作中间件使用
// Vue.use(plugin)

new Vue({
  el:'#app',
  render(createElement){
    return createElement(App)
  },
  //在beforeCreate中在Vue实例上添加一个x，x是一个Vue实例对象，并且可以被所有组件访问
  //安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus=this
  }
})
