// service统一出口
import HYRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
    requestInterceptorCatch: (err) => {
      return err
    }
    responseInterceptor: (res) => {
      return res
    }
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default hyRequest
