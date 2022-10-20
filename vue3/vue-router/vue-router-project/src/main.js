import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

createApp(App)
    //使用导出的router并挂载到app上
    .use(router)
    .mount('#app')
