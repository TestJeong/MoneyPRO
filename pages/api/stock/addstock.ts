import type {NextApiRequest, NextApiResponse} from "next"
import koreaStock from "../../../json/koreaStock.json"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function addStock(req: NextApiRequest, res: NextApiResponse<any>) {
  const {stockName, price, quantity, date, memo} = req.body

  if (req.method === "POST") {
    // POST request 처리
    await prisma.stock.create({
      data: {
        stock: stockName,
        price,
        quantity,
        memo
      }
    })
    res.json({ok: true})
  } else {
    // 다른 HTTP method 처리
  }
}

export default addStock
