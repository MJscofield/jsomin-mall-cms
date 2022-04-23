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
