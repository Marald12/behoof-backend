import { Module } from '@nestjs/common';
import { ArticleContentService } from './article-content.service';
import { ArticleContentResolver } from './article-content.resolver';

@Module({
  providers: [ArticleContentResolver, ArticleContentService],
})
export class ArticleContentModule {}
