// service统一出口
import MYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const myRequest = new MYRequest({
  // 1、使用.env全局变量的方式获取
  // baseUrl: process.env.VUE_APP_BASE_URL,
  // timeOut: process.env.VUE_APP_TIME_OUT

  // 2、使用process.env.NODE_ENV 设置不同的baseUrl
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default myRequest
