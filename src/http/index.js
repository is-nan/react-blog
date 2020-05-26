/*
 * @Author: 南岸有归
 * @Date: 2020-03-23 14:14:22
 * @LastEditTime: 2020-03-24 10:50:09
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \cloud_frontendd:\react\react-blog\src\http\index.js
 * @
 */
import axios from 'axios'
import { GetToken } from '../cookie/index'
const service = axios.create({
    // baseURL: 'http://www.nanbk.com/api/', // api 的 base_url
    timeout: 10000, // 请求超时时间,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false
})
service.interceptors.request.use(
    config => {
        if (GetToken()) {
            config.headers.Authorization = 'Bearer ' + GetToken()
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)
export default service
