import axios from "axios"
import {REQUEST_API_TOKEN} from "./get_api"

const baseURL = process.env.NEXT_PUBLIC_API_STOCK

export const server = axios.create({baseURL})
server.interceptors.request.use(async (config) => {
  const {access_token} = await REQUEST_API_TOKEN()

  if (!config.headers["Authorization"]) {
    ;(config.headers["Authorization"] = `Bearer ${access_token}`),
      (config.headers["appkey"] = process.env.NEXT_PUBLIC_APP_KEY),
      (config.headers["appsecret"] = process.env.NEXT_PUBLIC_APP_SCERCET)
  }

  return config
})
