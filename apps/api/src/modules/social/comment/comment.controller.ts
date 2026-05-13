import { Body, Controller, Param, Post } from '@nestjs/common';
import { IsOptional, IsString, MaxLength } from 'class-validator';

class CreateCommentDto {
  @IsString()
  @MaxLength(500)
  text!: string;

  @IsOptional()
  @IsString()
  parentCommentId?: string;
}

@Controller()
export class CommentController {
  @Post('videos/:videoId/comments')
  comment(@Param('videoId') videoId: string, @Body() dto: CreateCommentDto) {
    return { videoId, ...dto, id: 'comment_demo' };
  }
}
