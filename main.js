import App from './App'

// 1. 引入 uView UI 主库
import uView from '@/uni_modules/uview-ui'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

// 2. Vue 2 环境下安装 uView
Vue.use(uView)

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  
  // 3. Vue 3 环境下安装 uView
  app.use(uView)
  
  return {
    app
  }
}
// #endif