import { Field, InputType } from '@nestjs/graphql'
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator'
import { GraphQLJSONObject } from 'graphql-type-json'

@InputType()
export class UpdateProductDto {
	@Field({ nullable: true })
	@IsString({ message: 'Название должно быть строкой.' })
	@IsOptional()
	public readonly title: string

	@Field({ nullable: true })
	@IsString({ message: 'Описание должно быть строкой.' })
	@IsOptional()
	public readonly description: string

	@Field({ nullable: true })
	@IsNumber({}, { message: 'Цена должна быть числом.' })
	@IsOptional()
	public readonly price: number

	@Field(() => GraphQLJSONObject, { nullable: true })
	@IsOptional()
	public readonly characteristics: Record<string, any>

	@Field({ nullable: true })
	@IsNumber({}, { message: 'Рейтинг должен быть числом.' })
	@IsOptional()
	public readonly rating: number

	@Field(() => [String], { nullable: true })
	@IsArray({ message: 'Изображения должны быть массивом.' })
	@IsOptional()
	public readonly images: string[]
}
