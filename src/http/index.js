import axios from 'axios'

const service = axios.create({
  // baseURL: 'http://10.10.11.13:3000/api/', // api 的 base_url
  timeout: 10000, // 请求超时时间,
  headers: { 'Content-Type': 'application/json' },
  withCredentials:false
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)
export default service
