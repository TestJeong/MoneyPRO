import type {NextApiRequest, NextApiResponse} from "next"
import koreaStock from "../../../json/koreaStock.json"

type Data = {
  name: string
}

function koreanStockList(req: NextApiRequest, res: NextApiResponse<any>) {
  const {stockName} = req.query

  const result = koreaStock.filter((data) => {
    if (stockName === "") return
    return data.stock_name.includes(stockName as string)
  })

  res.status(200).json(result.slice(0, 20))
}

export default koreanStockList
