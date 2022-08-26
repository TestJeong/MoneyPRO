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

    const a = await prisma.stock.findMany({where: {categoryid: Number(id)}})

    return prisma.stock.findMany({where: {categoryid: Number(id)}})
  }

  @Post()
  async addStock(@Body(ValidationPipe) body: IaddStock) {
    const {stockName, stockCode, price, quantity, date, memo, categoryID} = body
    try {
      const {output} = await SERVER_REQUEST_KOREA_STOCK_ITEM(stockCode)

      return await prisma.stock.create({
        data: {
          stockName,
          stockCode,
          stockTheme: output.bstp_kor_isnm,
          currentPrice: output.stck_prpr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          price,
          quantity,
          memo,
          category: {connect: {id: Number(categoryID)}}
        },
        include: {
          category: true
        }
      })
    } catch (error) {
      console.error("addStock 에러 => ", error)
    }
  }

  @Delete()
  async deleteCategory() {}

  @Put()
  async updateCategory() {}
}

export default createHandler(Stocks)
