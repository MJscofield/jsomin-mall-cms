import axios from 'axios'

// axios的实例对象

axios.post('http://152.136.185.210:4000/role').then((res) => {
  console.log(res)
})
axios.post('http://httpbin.org/get',{
  params: {
    name: 'jsomin',
    age: 21
  }
}).then((res) => {
  console.log(res)
})
