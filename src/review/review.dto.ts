import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

@InputType()
export class ReviewDto {
	@Field()
	@IsString({ message: 'Сообщение должно быть строкой.' })
	@IsNotEmpty({ message: 'Сообщение не должно быть пустым.' })
	public readonly message: string

	@Field()
	@IsNumber({}, { message: 'Количество звёзд должно быть строкой.' })
	@IsNotEmpty({ message: 'Количество звёзд не должны быть пустымы.' })
	public readonly starsCount: number

	@Field()
	@IsString({ message: 'Идентификатор продукта должен быть строкой.' })
	@IsNotEmpty({ message: 'Идентификатор продукта не должен быть пустым.' })
	public readonly productId: string
}
