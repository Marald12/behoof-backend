import { Resolver } from '@nestjs/graphql';
import { ArticleContentService } from './article-content.service';

@Resolver()
export class ArticleContentResolver {
  constructor(private readonly articleContentService: ArticleContentService) {}
}
