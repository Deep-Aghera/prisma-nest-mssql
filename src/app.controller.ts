import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//let data = prisma.persons.findMany().then(data => data);

// const user = prisma.user.create({
//   name : "deep",
// })

let data = prisma.persons.create({
  data: {
    LastName : "deep"
  },
}).then(data => data)


// let user = prisma.user.create({
//   data: {
//     name : "deep",
//     email : "deepaghera001@gmail.com",
//     password : "temppass"
//   },
// }).then(data => data)


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  


  @Get()
  getHello(): string {
   console.log(data)
   
    return this.appService.getHello();
  }
}
