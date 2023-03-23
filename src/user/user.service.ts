import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

let data = prisma.user.findMany().then(data => data);

@Injectable()
export class UserService {
    getUser() {
        console.log(data);
        
        return data;
    }

    postUser(userData) {
        console.log(userData);
        let user = prisma.user.create({
            data: userData,
          }).then(data => data)
        return "post user data";
    }
}