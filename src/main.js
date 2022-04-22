import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store/index'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

const app = createApp(App)

app.use(store)
    .use(Antd)
    // .use(zhCN)
    .use(ElementPlus)
    // .use(Element3)
    .use(router)
    .mount('#app')
