import { createApp } from 'vue'
import { globalRegister } from './global'
// 全局引用
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import hyRequest from './service'

import { ElLoading } from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
// import './service/axios_demo'
const app = createApp(App)
// for (const component of components) {
//   app.component(component.name, component)
// }
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL);
hyRequest.request({
  url: '/posts',
  method: 'GET'
  // interceptors: {
  //   requestInterceptor: (config) => {
  //     console.log('单独请求的config')
  //     return config
  //   },
  //   responseInterceptor: (res) => {
  //     console.log('单独请求的config')
  //     return res
  //   }
  // }
})
