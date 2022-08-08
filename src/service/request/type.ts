import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any

  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptors
}
