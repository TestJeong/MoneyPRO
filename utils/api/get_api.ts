import axios, {Axios} from "axios"
import {KOREA_STOCK_API} from "./post_api"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const REQUEST_KOREAN_STOCK_API = async (stockName: string) => {
  const response = await axios.get(`${API_URL}api/search/koreanstock`, {params: {stockName}})
  return response.data
}

export const REQUEST_CATEGORY_LIST = async () => {
  const {data} = await axios.get(`${API_URL}api/category`)
  return data
}

export const REQUEST_STOCK_LIST = async (id: string) => {
  const {data} = await axios.get(`${API_URL}api/stock`, {params: id})
  return data
}

export const SERVER_REQUEST_KOREA_STOCK_ITEM = async () => {
  const {data} = await axios.get(`${KOREA_STOCK_API}uapi/domestic-stock/v1/quotations/inquire-price`, {
    params: {FID_COND_MRKT_DIV_CODE: "J", FID_INPUT_ISCD: "000660"},
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      appkey: process.env.NEXT_PUBLIC_APP_KEY,
      appsecret: process.env.NEXT_PUBLIC_APP_SCERCET,
      tr_id: "FHKST01010100"
    }
  })
  return data
}
