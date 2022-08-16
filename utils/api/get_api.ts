import axios, {Axios} from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const REQUEST_KOREAN_STOCK_API = async (stockName: string) => {
  const response = await axios.get(`${API_URL}api/search/koreanstock`, {params: {stockName}})
  return response.data
}

export const REQUEST_CATEGORY_LIST = async () => {
  const {data} = await axios.get(`${API_URL}api/category`)
  return data
}
