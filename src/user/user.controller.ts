import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {

    constructor(private userService : UserService) {}

    @Post()
    getPost(@Body() userData) {
    console.log(userData);
    return this.userService.postUser(userData)
  }

    @Get()
    userGet() {
        return this.userService.getUser();
    }
}
