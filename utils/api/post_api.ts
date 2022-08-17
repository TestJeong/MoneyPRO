import axios from "axios"
import {IaddStock} from "lib/type/api_type"

export const KOREA_STOCK_API = process.env.NEXT_PUBLIC_API_STOCK

export const POST_ADD_STOCK = async (stockInformation: IaddStock) => {
  const response = await axios.post("http://localhost:3000/api/stock", stockInformation)
  return response.data
}

export const POST_ADD_CATEGORY = async ({title, account}: any) => {
  const response = await axios.post("http://localhost:3000/api/category", {title, account})
  return response.data
}

export const POST_GET_KOREASTOCK_TOKEN = async () => {
  const {data} = await axios.post(`${KOREA_STOCK_API}oauth2/tokenP`, {
    grant_type: "client_credentials",
    appkey: process.env.NEXT_PUBLIC_APP_KEY,
    appsecret: process.env.NEXT_PUBLIC_APP_SCERCET
  })

  return data
}
