import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ArticleService } from './article.service'
import { Article } from '../shared/prismagraphql/article'
import { CreateArticleDto } from './dto/create-article.dto'
import { Auth } from '../auth/auth.decorator'
import { CurrentUser } from '../user/user.decorator'

@Resolver()
export class ArticleResolver {
	constructor(private readonly articleService: ArticleService) {
	}

	@Mutation(() => Article)
	@Auth()
	public createArticle(
		@Args('body') body: CreateArticleDto,
		@CurrentUser() userId: string
	) {
		return this.articleService.create(userId, body)
	}

	@Query(() => [Article])
	public findAllArticles(
		@Args('take', { nullable: true }) take?: number,
		@Args('skip', { nullable: true }) skip?: number,
		@Args('search', { nullable: true }) search?: string,
		@Args('categoryId', { nullable: true }) categoryId?: string,
		@Args('tag', { nullable: true }) tag?: string
	) {
		const tags = tag ? tag!.split(',') : undefined
		return this.articleService.findAll(take, skip, search, categoryId, tags)
	}

	@Query(() => Article)
	public findArticleById(@Args('id') id: string) {
		return this.articleService.findById(id)
	}
}
