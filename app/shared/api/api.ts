import axios, {  AxiosResponse } from 'axios'

let controller: AbortController | null = null

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(config => {
  if (controller) {
    controller.abort()
  }

  controller = new AbortController()
  config.signal = controller.signal

  return config
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    controller = null
    return response
  },
  error => {
    controller = null
    return Promise.reject(error)
  }
)


