import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { QuestionService } from './question.service'
import { Auth } from '../auth/auth.decorator'
import { CurrentUser } from '../user/user.decorator'
import { QuestionDto } from './question.dto'
import { Question } from '../shared/prismagraphql/question'

@Resolver()
export class QuestionResolver {
	constructor(private readonly questionService: QuestionService) {}

	@Auth()
	@Mutation(() => Question)
	public createQuestion(
		@CurrentUser() userId: string,
		@Args('dto') dto: QuestionDto
	) {
		return this.questionService.create(userId, dto)
	}

	@Query(() => [Question])
	public findAllQuestions() {
		return this.questionService.findAll()
	}

	@Query(() => Question)
	public findQuestionById(@Args('id') id: string) {
		return this.questionService.findById(id)
	}
}
