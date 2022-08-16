import {PrismaClient} from "@prisma/client"
import {Body, createHandler, Delete, Get, Param, Post, Put, ValidationPipe} from "@storyofams/next-api-decorators"
import {CreateCategory} from "server/dto/category/category.input"

const prisma = new PrismaClient()

class Categorys {
  @Get()
  async getCategory() {
    return prisma.category.findMany()
  }

  @Post()
  async addCategory(@Body(ValidationPipe) body: CreateCategory) {
    await prisma.category.create({data: {title: body.title, account: body.account}})
    return "Our users"
  }

  @Delete()
  async deleteCategory() {}

  @Put()
  async updateCategory() {}
}

export default createHandler(Categorys)
