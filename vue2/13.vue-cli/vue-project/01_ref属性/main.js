import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // 简单写法:
  // render: h => h(App),
  // 完整写法
  //createElement是一个函数，接收两个参数，第一个是DOM结点的名字，第二个是里面的内容，如果传入的是一个组件的话就直接传组件就行了
  render(createElement){
    return createElement(App)
  }
})
