import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入样式
import 'ant-design-vue/dist/antd.css'
//引入antD
import antd from 'ant-design-vue'

createApp(App)
    .use(router)
    .use(antd)
    .mount('#app')
