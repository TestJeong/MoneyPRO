import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Delete, Get, Param, Post, Put, Req, ValidationPipe} from "@storyofams/next-api-decorators"
import {NextApiRequest} from "next"

const prisma = new PrismaClient()

class Assets {
  @Get()
  async getAssets(@Req() req: NextApiRequest) {
    const {id} = req.query
    let totla = 0
    const data = await prisma.stock.findMany({where: {categoryid: Number(id)}})
    return prisma.category.findMany()
  }

  @Post()
  async addAssets() {}

  @Delete()
  async deleteAssets() {}

  @Put()
  async updateAssets() {}
}

export default createHandler(Assets)
