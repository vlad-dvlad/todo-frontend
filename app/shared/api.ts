import axios, {  AxiosResponse } from 'axios'

let controller: AbortController | null = null

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Перехоплення запитів
axiosInstance.interceptors.request.use(config => {
  // Якщо є попередній запит — скасовуємо
  if (controller) {
    controller.abort()
  }

  controller = new AbortController()
  config.signal = controller.signal

  return config
})

// Перехоплення відповідей
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


