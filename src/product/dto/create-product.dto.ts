import { Field, InputType } from '@nestjs/graphql'
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { GraphQLJSONObject } from 'graphql-type-json'

@InputType()
export class CreateProductDto {
	@Field()
	@IsString({ message: 'Название должно быть строкой.' })
	@IsNotEmpty({ message: 'Название не должно быть пустым.' })
	public readonly title: string

	@Field()
	@IsString({ message: 'Описание должно быть строкой.' })
	@IsNotEmpty({ message: 'Описание не должно быть пустым.' })
	public readonly description: string

	@Field()
	@IsNumber({}, { message: 'Цена должна быть числом.' })
	@IsNotEmpty({ message: 'Цена не должна быть пустой.' })
	public readonly price: number

	@Field()
	@IsString({ message: 'Бренд должен быть строкой.' })
	@IsNotEmpty({ message: 'Бренд не должен быть пустым.' })
	public readonly brandId: string

	@Field()
	@IsString({ message: 'Категория должна быть строкой.' })
	@IsNotEmpty({ message: 'Категория не должна быть пустой.' })
	public readonly categoryId: string

	@Field(() => GraphQLJSONObject)
	@IsNotEmpty({ message: 'Характеристики не должны быть пустыми.' })
	public readonly characteristics: Record<any, any>

	@Field()
	@IsNumber({}, { message: 'Рейтинг должен быть числом.' })
	@IsNotEmpty({ message: 'Рейтинг не должен быть пустым.' })
	public readonly rating: number

	@Field(() => [String])
	@IsArray({ message: 'Цвета должны быть массивом.' })
	@IsNotEmpty({ message: 'Цвета не должны быть пустыми.' })
	public readonly colors: string[]

	@Field(() => [String])
	@IsArray({ message: 'Изображения должны быть массивом.' })
	@IsNotEmpty({ message: 'Изображения не должны быть пустыми.' })
	public readonly images: string[]
}
