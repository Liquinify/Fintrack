// import { useCookies } from 'vue3-cookies'

import axios, { type AxiosRequestConfig } from "axios"

export async function useAxios<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
//   const { cookies } = useCookies()

  const defaultOptions = {
    url,
    method: 'GET',
    baseURL: import.meta.env.VITE_API_URL,
    transformResponse: [
      function (data, _headers, status) {
        if (status === 403) {
        //   cookies.remove('token')
          window.location.href = '/'
        }
        try {
          return JSON.parse(data || '{}')
        } catch (e) {
          return data
        }
      }
    ],
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Token': `${import.meta.env.VITE_API_TOKEN}`,
      ...(options?.headers ?? {}),
    }
  } as AxiosRequestConfig

  const response = await axios(defaultOptions)
  return response.data
}
