import axios from 'axios'

// axios的实例对象

axios
  .post('http://httpbin.org/get', {
    params: {
      name: 'jsomin',
      age: 21
    }
  })
  .then((res) => {
    console.log(res.data)
  })
