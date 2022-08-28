import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Delete, Get, Param, Post, Put, Req, ValidationPipe} from "@storyofams/next-api-decorators"
import {NextApiRequest} from "next"
import {currentAssets} from "utils/helper/stock_helper"

const prisma = new PrismaClient()

class Assets {
  @Get()
  async getAssets(@Req() req: NextApiRequest) {
    const {id} = req.query
    let total = 0
    const data = await prisma.stock.findMany({where: {categoryid: Number(id)}})
    data.map((data) => {
      let ab = currentAssets(parseFloat(data.currentPrice.replace(/,/g, "")), parseFloat(data.price.replace(/,/g, "")), data.quantity)
      total += parseFloat(ab.replace(/,/g, ""))
    })
    return total
  }

  @Post()
  async addAssets() {}

  @Delete()
  async deleteAssets() {}

  @Put()
  async updateAssets() {}
}

export default createHandler(Assets)
