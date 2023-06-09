"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const bcrypt = require("bcrypt");
let data = prisma.user.findMany().then(data => data);
let UserService = class UserService {
    getUser() {
        console.log(data);
        return data;
    }
    async postUser(userData) {
        const saltOrRound = 10;
        const password = userData.password;
        const hash = await bcrypt.hash(password, saltOrRound);
        userData.password = hash;
        let user = prisma.user.create({
            data: userData,
        }).then(data => data);
        return "post user data";
    }
    credentialVarification(credential) {
        console.log(credential);
        return "you log in";
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map