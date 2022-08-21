import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_STOCK

export const server = axios.create({baseURL})
server.interceptors.request.use(async (config) => {
  if (!config.headers["Authorization"]) {
    ;(config.headers["Authorization"] = `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`),
      (config.headers["appkey"] = process.env.NEXT_PUBLIC_APP_KEY),
      (config.headers["appsecret"] = process.env.NEXT_PUBLIC_APP_SCERCET)
  }

  return config
})
