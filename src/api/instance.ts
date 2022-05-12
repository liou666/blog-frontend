import axios, { AxiosInstance } from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_API

const instance:AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/v1/blog`,
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 请求前
    return config
  }
  , err => {
    // 请求错误
    return Promise.reject(err)
  }
)
// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 请求成功
    return response.data
  }
  , err => {
    // 请求失败
    return Promise.reject(err)
  }
)
export default instance
