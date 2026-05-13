import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedRankingService } from './feed.ranking.service';

@Module({ controllers: [FeedController], providers: [FeedRankingService] })
export class FeedModule {}
