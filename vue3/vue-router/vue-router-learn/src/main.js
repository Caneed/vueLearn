import { createApp } from 'vue'
import App from './App.vue'
// import router from "@/router/路由组件参数.js";
import router from "@/router/动态路由.js"

createApp(App)
    .use(router).mount('#app')
