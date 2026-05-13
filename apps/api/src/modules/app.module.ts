import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FeedModule } from './feed/feed.module';
import { SocialModule } from './social/social.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [AuthModule, UserModule, VideoModule, FeedModule, SocialModule]
})
export class AppModule {}
