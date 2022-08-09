import axios, {Axios} from "axios"

export const POST_ADD_STOCK = async ({stockInformation}: any) => {
  const response = await axios.post("http://localhost:3000/api/stock/addstock", {params: {stockInformation}})

  return response.data
}
