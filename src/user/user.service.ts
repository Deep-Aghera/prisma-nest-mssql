import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

import * as bcrypt from 'bcrypt';



let data = prisma.user.findMany().then(data => data);

@Injectable()
export class UserService {
    getUser() {
        console.log(data);
        
        return data;
    }

    async postUser(userData) {
        
        const saltOrRound = 10;
       
         const password = userData.password;
         const hash = await bcrypt.hash(password,saltOrRound);
      
         userData.password = hash;
         console.log("helo",userData.password)
        let user = prisma.user.create({
            data: userData,
          }).then(data => data)
        return "post user data";
    }
}