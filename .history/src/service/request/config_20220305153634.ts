let BASE_URL = ''
const TIMEOUT = 10000

if(process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://jsonplaceholder.typicode.com/
  '
} else if(process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://'
} else {
  BASE_URL = ''
}

export  {BASE_URL, TIMEOUT}
