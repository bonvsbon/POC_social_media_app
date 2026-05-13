import { Controller, Delete, Param, Post } from '@nestjs/common';

@Controller('videos/:videoId/bookmarks')
export class BookmarkController {
  @Post()
  save(@Param('videoId') videoId: string) {
    return { videoId, bookmarked: true };
  }

  @Delete()
  unsave(@Param('videoId') videoId: string) {
    return { videoId, bookmarked: false };
  }
}
