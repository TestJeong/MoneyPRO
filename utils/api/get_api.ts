import axios, { Axios } from "axios";

export const REQUEST_KOREAN_STOCK_API = async (stockName: string) => {
  const response = await axios.get(
    "http://localhost:3000/api/search/koreanstock",
    { params: { stockName } }
  );

  return response.data;
};
