import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

import hyRequest from './service'

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
interface DataType {
  status: number
  data: any
  statusText: string
}
hyRequest
  .get<DataType>({
    url: '/posts',
    // method: 'GET',
    showLoading: false
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
  .then((res) => {
    console.log(res.data)
    console.log(res.status)
    console.log(res.statusText)
  })
// 若是没有开启Devtools工具，在开发环境中开启，在生产环境中关闭
