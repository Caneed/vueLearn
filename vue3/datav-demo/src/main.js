import { createApp } from 'vue'
import dataV from '@jiaminghi/data-view'
import App from './App.vue'

createApp(App)
    .use(dataV)
    .mount('#app')
