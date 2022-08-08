import { createApp } from 'vue'
// element-plus 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import router from '@/router'
import store from '@/store'

import App from './App.vue'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
