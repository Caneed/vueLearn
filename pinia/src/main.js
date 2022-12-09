import { createApp } from 'vue'
import App from './App.vue'
//首先 npm i pinia下载包
//pinia的引入
import {createPinia} from "pinia";

createApp(App)
    //usePinia
    .use(createPinia())
    .mount('#app')
