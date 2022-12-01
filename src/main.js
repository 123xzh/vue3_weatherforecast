import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 动画 animate.css
import 'animate.css';
import 'default-passive-events'
import pinyin from 'js-pinyin'

import locale  from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).use(ElementPlus, {locale}).mount('#app')
