import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
    ValidationPipe,
  } from '@nestjs/common';
  
  import { AuthService } from '../service/auth.service';
  import { JwtAuthGuard } from '../guards/jwt-auth.guard';
  import { LocalAuthGuard } from '../guards/local-auth.guard';
import { User } from 'src/user/schema/user.schema';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Post('/signup')
    async signUp(
      @Body(ValidationPipe) authCredentialsDto: User
    ): Promise<void> {
      return await this.authService.signUp(authCredentialsDto);
    }
  
    // @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req) {
        const user:User = {
            name: '',
            lastname: '',
            email: req.email,
            password: req.password,
            createdDate: undefined,
            _id: ''
        }
      return this.authService.signIn(user);
    }
    
    @Get('me')
    @UseGuards(JwtAuthGuard)
    getMe(@Request() req) {
      return req.user;
    }
  }