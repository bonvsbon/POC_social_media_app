import { Injectable } from '@nestjs/common';

export interface FeedCandidate {
  videoId: string;
  watchDurationScore: number;
  completionRate: number;
  likeScore: number;
  freshnessScore: number;
  negativeSignalScore: number;
}

@Injectable()
export class FeedRankingService {
  rank(candidates: FeedCandidate[]) {
    return candidates
      .map((candidate) => ({
        ...candidate,
        score:
          candidate.watchDurationScore * 0.28 +
          candidate.completionRate * 0.22 +
          candidate.likeScore * 0.2 +
          candidate.freshnessScore * 0.15 -
          candidate.negativeSignalScore * 0.25
      }))
      .sort((a, b) => b.score - a.score);
  }
}
