import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CommentDto {
	@Field()
	@IsString({ message: 'Комментарий должен быть строкой.' })
	@IsNotEmpty({ message: 'Комментарий не должен быть пустым.' })
	comment: string

	@Field()
	@IsString({ message: 'Идентификатор поста должен быть строкой.' })
	@IsNotEmpty({ message: 'Идентификатор поста не должен быть пустым.' })
	articleId: string
}
