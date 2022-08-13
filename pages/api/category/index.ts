import type {NextApiRequest, NextApiResponse} from "next"
import koreaStock from "../../../json/koreaStock.json"
import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Get, Post} from "@storyofams/next-api-decorators"

const prisma = new PrismaClient()

// const addCategory = async (req: NextApiRequest, res: NextApiResponse<any>) => {
//   const {title, account} = req.body

//   if (req.method === "POST") {
//     // POST request 처리
//     await prisma.category.create({
//       data: {
//         title,
//         account
//       }
//     })
//     res.json({ok: true})
//   } else {
//     // 다른 HTTP method 처리
//   }
// }

// export default addCategory

class Test {
  title!: string
  account!: string
}

class Categorys {
  @Post()
  async addCategory(@Body() body: any) {
    await prisma.category.create({data: {title: body.title, account: body.account}})
    return "Our users"
  }
}

export default createHandler(Categorys)
