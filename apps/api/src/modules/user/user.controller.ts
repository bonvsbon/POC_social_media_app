import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('me')
  me() {
    return { id: 'u_demo', handle: 'demo_user', language: 'en', country: 'US' };
  }
}
