import axios from 'axios'

// axios的实例对象
axios.defaults.baseURL = 'http://httpbin.org/'
axios
  .get('/get', {
    params: {
      name: 'jsomin',
      age: 21
    }
  })

  .then((res) => {
    console.log(res.data)
  })

axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
