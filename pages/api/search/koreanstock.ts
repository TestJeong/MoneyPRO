import type {NextApiRequest, NextApiResponse} from "next"
import koreaStock from "../../../json/koreaStock.json"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

type Data = {
  name: string
}

async function koreanStockList(req: NextApiRequest, res: NextApiResponse<any>) {
  const {stockName} = req.query
  const result = koreaStock.filter((data) => {
    if (stockName === "") return
    return data.stock_name.includes(stockName as string)
  })
  res.status(200).json(result.slice(0, 20))

  // await prisma.user.create({
  //   data: {
  //     email: "ddd",
  //     name: "asdfasdfasdf"
  //   }
  // })

  // res.json({ok: true})
}

export default koreanStockList
