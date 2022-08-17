import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Delete, Get, Param, Post, Put, Req, ValidationPipe} from "@storyofams/next-api-decorators"
import {IaddStock} from "lib/type/api_type"
import {NextApiRequest} from "next"
import {SERVER_REQUEST_KOREA_STOCK_ITEM} from "utils/api/get_api"

const prisma = new PrismaClient()

class Stocks {
  @Get()
  async getStocks(@Req() req: NextApiRequest) {
    const {id} = req.query
    const aa = await SERVER_REQUEST_KOREA_STOCK_ITEM()
    console.log("!!!", aa)
    return prisma.stock.findMany({where: {categoryid: Number(id)}})
  }

  @Post()
  async addStock(@Body(ValidationPipe) body: IaddStock) {
    const {stockName, price, quantity, date, memo, categoryID} = body
    await prisma.stock.create({
      data: {
        stock: stockName,
        price,
        quantity,
        memo,
        category: {connect: {id: Number(categoryID)}}
      },
      include: {
        category: true
      }
    })
    return "Our users"
  }

  @Delete()
  async deleteCategory() {}

  @Put()
  async updateCategory() {}
}

export default createHandler(Stocks)
