import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Delete, Get, Param, Post, Put, ValidationPipe} from "@storyofams/next-api-decorators"

const prisma = new PrismaClient()

class ApiToken {
  @Get()
  async getApiToken() {
    const a = await prisma.token.findMany()
    return a[0]
  }
}

export default createHandler(ApiToken)
