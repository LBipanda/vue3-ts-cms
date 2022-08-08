import axios from 'axios'
import { AxiosInstance } from 'axios'
import { MYRequestInterceptors, MYRequestConfig } from './type'

class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptors

  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
  }

  request(config: MYRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default MYRequest
