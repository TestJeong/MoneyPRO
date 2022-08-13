import axios from "axios"
import {IaddStock} from "lib/type/api_type"

export const POST_ADD_STOCK = async (stockInformation: IaddStock) => {
  const response = await axios.post("http://localhost:3000/api/stock/addstock", stockInformation)
  return response.data
}

export const POST_ADD_CATEGORY = async ({title, account}: any) => {
  const response = await axios.post("http://localhost:3000/api/category", {title, account})
  return response.data
}
