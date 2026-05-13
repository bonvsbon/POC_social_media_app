import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark/bookmark.controller';
import { CommentController } from './comment/comment.controller';
import { FollowController } from './follow/follow.controller';
import { LikeController } from './like/like.controller';

@Module({
  controllers: [LikeController, FollowController, CommentController, BookmarkController]
})
export class SocialModule {}
