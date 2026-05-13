import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IsEnum, IsString } from 'class-validator';

enum VideoVisibility {
  PUBLIC = 'public',
  FOLLOWERS = 'followers_only',
  PRIVATE = 'private'
}

class CreateVideoDto {
  @IsString()
  storageKey!: string;

  @IsString()
  caption!: string;

  @IsEnum(VideoVisibility)
  visibility!: VideoVisibility;
}

@Controller('videos')
export class VideoController {
  @Post()
  create(@Body() dto: CreateVideoDto) {
    return { id: 'vid_demo', status: 'pending_processing', ...dto };
  }

  @Get(':videoId')
  getById(@Param('videoId') videoId: string) {
    return { id: videoId, status: 'published' };
  }
}
