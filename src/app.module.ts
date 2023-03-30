import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
    secret: 'Mysec', 
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService,UserService,AuthService,JwtService],
})
export class AppModule {}
