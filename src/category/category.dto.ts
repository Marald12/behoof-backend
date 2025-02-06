import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

@InputType()
export class CategoryDto {
	@Field()
	@IsString({ message: 'Название не являеться строкой.' })
	@IsNotEmpty({ message: 'Название не может быть пустым.' })
	@MinLength(3, { message: 'Минимальная длина названия 3 символа.' })
	@MaxLength(50, { message: 'Максимальная длина названия 50 символов.' })
	title: string
}
