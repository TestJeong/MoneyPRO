import type {NextApiRequest, NextApiResponse} from "next"
import koreaStock from "../../../json/koreaStock.json"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

type Data = {
  name: string
}

async function addStock(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    // POST request 처리
    // await prisma.stock.create({
    //   data: {
    //     email: "ddd",
    //     name: "asdfasdfasdf"
    //   }
    // })
    // res.json({ok: true})
  } else {
    // 다른 HTTP method 처리
  }
}

export default addStock
