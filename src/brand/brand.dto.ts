import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class BrandDto {
	@Field()
	@IsString({ message: 'Название должно быть строкой' })
	@IsNotEmpty({ message: 'Название не должно быть пустым' })
	title: string

	@Field(() => [String])
	@IsArray({ message: 'Категории должны быть массивом строк' })
	@ArrayNotEmpty({ message: 'Список категорий не должен быть пустым' })
	categories: string[]
}
