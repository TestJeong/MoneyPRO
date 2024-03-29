import {IsString} from "class-validator"

export class CreateCategory {
  @IsString()
  title: string

  @IsString()
  account: string
}
