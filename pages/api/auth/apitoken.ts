import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Delete, Get, Param, Post, Put, ValidationPipe} from "@storyofams/next-api-decorators"

const prisma = new PrismaClient()

class ApiToken {
  @Get()
  async getApiToken() {
    const token = await prisma.token.findMany()
    return token[0]
  }
}

export default createHandler(ApiToken)
