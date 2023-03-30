import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import { JwtService } from '@nestjs/jwt';

@Injectable() 
export class AuthService {

    constructor(
        private readonly jwtService: JwtService
      ) {}

    async register(registerData) {
        const {name , email, password } = registerData;
        const hashedPassword = await bcrypt.hash(password,10)
        registerData.password = hashedPassword;
        let user = await prisma.user.create({
            data: registerData,
          })
          console.log(user.id.toString());
         let token = this.jwtService.sign({ id : "12jhj"},);
        return "udhf";
        
    }
}