import { Field, InputType } from '@nestjs/graphql'
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

enum ContentTypes {
	LIST = 'LIST',
	TEXT = 'TEXT'
}

@InputType()
export class ArticleContentInput {
	@Field()
	@IsString({ message: 'Заголовок должен быть строкой.' })
	@IsNotEmpty({ message: 'Заголовок не должен быть пустым.' })
	title: string

	@Field()
	@IsString({ message: 'Описание должно быть строкой.' })
	@IsNotEmpty({ message: 'Описание не должно быть пустым.' })
	description: string

	@Field(() => [String], { nullable: true })
	@IsOptional()
	@IsArray({ message: 'Изображения должны быть массивом строк.' })
	images?: string[]

	@Field()
	@IsEnum(ContentTypes, { message: 'Тип контента должен быть LIST или TEXT.' })
	types: 'LIST' | 'TEXT'
}

@InputType()
export class CreateArticleDto {
	@Field()
	@IsString({ message: 'Название должно быть строкой.' })
	@IsNotEmpty({ message: 'Название не должно быть пустым.' })
	title: string

	@Field(() => [String])
	@IsArray({ message: 'Теги должны быть массивом строк.' })
	@ArrayNotEmpty({ message: 'Массив тегов не должен быть пустым.' })
	tags: string[]

	@Field(() => [ArticleContentInput])
	@IsArray({ message: 'Контент должен быть массивом объектов.' })
	@ArrayNotEmpty({ message: 'Контент не должен быть пустым.' })
	content: ArticleContentInput[]

	@Field()
	@IsString({ message: 'Баннер должен быть строкой.' })
	@IsNotEmpty({ message: 'Баннер не должен быть пустым.' })
	banner: string

	@Field()
	@IsString({ message: 'Категория должна быть строкой.' })
	@IsNotEmpty({ message: 'Категория не должна быть пустой.' })
	categoryId: string
}
