import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CommentService } from './comment.service'
import { Comment } from '../shared/prismagraphql/comment'
import { CommentDto } from './comment.dto'
import { Auth } from '../auth/auth.decorator'
import { CurrentUser } from '../user/user.decorator'

@Resolver()
export class CommentResolver {
	constructor(private readonly commentService: CommentService) {}

	@Mutation(() => Comment)
	@Auth()
	public createComment(
		@Args('body') body: CommentDto,
		@CurrentUser() userId: string
	) {
		return this.commentService.create(userId, body)
	}

	@Query(() => [Comment])
	public findAllComments(
		@Args('articleId', { nullable: true }) articleId?: string
	) {
		return this.commentService.findAll(articleId)
	}
}
