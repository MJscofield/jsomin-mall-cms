import axios from 'axios'

// axios的实例对象

axios.post('http://123.207.32.32:8080/home/multidata').then((res) => {
  console.log(res.data)
})
