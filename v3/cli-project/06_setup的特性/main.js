//createApp是一个工厂函数而不是构造函数
import { createApp } from 'vue'
import App from './App.vue'


//createApp(App)指的是创建一个相当于应用实例的对象(vm)，但是App比vm更加轻量,然后将vm实例对象挂载到id为app的根结点上
createApp(App).mount('#app')
