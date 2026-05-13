import { FeedRankingService } from '../src/modules/feed/feed.ranking.service';

describe('FeedRankingService', () => {
  it('ranks candidates descending by explainable score', () => {
    const service = new FeedRankingService();
    const ranked = service.rank([
      { videoId: 'low', watchDurationScore: 0.2, completionRate: 0.2, likeScore: 0.1, freshnessScore: 0.3, negativeSignalScore: 0.2 },
      { videoId: 'high', watchDurationScore: 0.9, completionRate: 0.8, likeScore: 0.7, freshnessScore: 0.5, negativeSignalScore: 0.1 }
    ]);

    expect(ranked[0].videoId).toBe('high');
  });
});
