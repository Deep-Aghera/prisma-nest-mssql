import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {

    constructor(readonly authService : AuthService) {}

    @Get('login')
    getAuth() {
        return "Auth";
    }

    @Get('register')
    getRegister(@Body() registerData) {
        return this.authService.register(registerData);
    }
}
