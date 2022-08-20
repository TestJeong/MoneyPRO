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

// 업종 테마
export const SERVER_REQUEST_KOREA_STOCK_ITEM = async (code: string) => {
  const {data} = await axios.get(`${KOREA_STOCK_API}uapi/domestic-stock/v1/quotations/inquire-price`, {
    params: {FID_COND_MRKT_DIV_CODE: "J", FID_INPUT_ISCD: code},
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      appkey: process.env.NEXT_PUBLIC_APP_KEY,
      appsecret: process.env.NEXT_PUBLIC_APP_SCERCET,
      tr_id: "FHKST01010100"
    }
  })
  return data
}

// 전일 종가
export const SERVER_REQUEST_KOREA_STOCK_CLOSEING_PRICE = async (code: string) => {
  const {data} = await axios.get(`${KOREA_STOCK_API}uapi/domestic-stock/v1/quotations/inquire-daily-itemchartprice`, {
    params: {
      FID_COND_MRKT_DIV_CODE: "J",
      FID_INPUT_ISCD: code,
      FID_INPUT_DATE_1: "",
      FID_INPUT_DATE_2: "",
      FID_PERIOD_DIV_CODE: "D",
      FID_ORG_ADJ_PRC: 0
    }
  })
  return data
}
