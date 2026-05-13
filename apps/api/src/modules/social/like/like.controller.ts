import { Controller, Delete, Param, Post } from '@nestjs/common';

@Controller('videos/:videoId/likes')
export class LikeController {
  @Post()
  like(@Param('videoId') videoId: string) {
    return { videoId, liked: true };
  }

  @Delete()
  unlike(@Param('videoId') videoId: string) {
    return { videoId, liked: false };
  }
}
