import { IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class BrandDto {
	@Field()
	@IsString({ message: 'Название должно быть строкой' })
	@IsNotEmpty({ message: 'Название не должно быть пустым' })
	title: string

	@Field()
	@IsString({ message: 'Категория должна быть строкой' })
	@IsNotEmpty({ message: 'Категория не должна быть пустой' })
	categoryId: string
}
