import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ReviewService } from './review.service'
import { Review } from '../shared/prismagraphql/review'
import { ReviewDto } from './review.dto'
import { CurrentUser } from '../user/user.decorator'
import { Auth } from '../auth/auth.decorator'

@Resolver()
export class ReviewResolver {
	constructor(private readonly reviewService: ReviewService) {}

	@Auth()
	@Mutation(() => Review)
	public createReview(
		@CurrentUser() userId: string,
		@Args('dto') dto: ReviewDto
	) {
		return this.reviewService.create(userId, dto)
	}

	@Query(() => [Review])
	public findAllReviews() {
		return this.reviewService.findAll()
	}

	@Query(() => Review)
	public findReviewById(@Args('id') id: string) {
		return this.reviewService.findById(id)
	}
}
