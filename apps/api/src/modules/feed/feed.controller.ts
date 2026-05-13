import { Controller, Get } from '@nestjs/common';
import { FeedRankingService } from './feed.ranking.service';

@Controller('feed')
export class FeedController {
  constructor(private readonly rankingService: FeedRankingService) {}

  @Get('for-you')
  forYou() {
    return this.rankingService.rank([
      { videoId: 'v1', watchDurationScore: 0.9, completionRate: 0.8, likeScore: 0.6, freshnessScore: 0.7, negativeSignalScore: 0.1 },
      { videoId: 'v2', watchDurationScore: 0.5, completionRate: 0.4, likeScore: 0.9, freshnessScore: 0.9, negativeSignalScore: 0.5 }
    ]);
  }
}
