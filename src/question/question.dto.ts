import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class QuestionDto {
	@Field()
	@IsString({ message: 'Вопрос должен быть строкой' })
	@IsNotEmpty({ message: 'Вопрос не может быть пустым' })
	question: string
}
