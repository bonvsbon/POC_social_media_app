import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsString, MinLength } from 'class-validator';

class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;
}

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() dto: LoginDto) {
    return { accessToken: 'stub-access-token', refreshToken: 'stub-refresh-token', email: dto.email };
  }
}
