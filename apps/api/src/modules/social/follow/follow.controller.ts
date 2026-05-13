import { Controller, Delete, Param, Post } from '@nestjs/common';

@Controller('users/:userId/follow')
export class FollowController {
  @Post()
  follow(@Param('userId') userId: string) {
    return { userId, following: true };
  }

  @Delete()
  unfollow(@Param('userId') userId: string) {
    return { userId, following: false };
  }
}
