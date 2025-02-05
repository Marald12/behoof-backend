import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserDto {
	@Field()
	@IsEmail({}, { message: 'Некорректный email.' })
	@IsNotEmpty({ message: 'Поле email не должно быть пустым.' })
	@IsString({ message: 'Поле email должно быть строкой.' })
	public readonly email: string

	@Field()
	@IsString({ message: 'Поле пароль должно быть строкой.' })
	@IsNotEmpty({ message: 'Поле пароль не должно быть пустым.' })
	@MinLength(6, { message: 'Пароль должен содержать минимум 6 символов.' })
	@MaxLength(16, { message: 'Пароль должен содержать максимум 16 символов.' })
	public readonly password: string

	@Field()
	@IsString({ message: 'Поле имя должно быть строкой.' })
	@IsNotEmpty({ message: 'Поле имя не должно быть пустым.' })
	@MaxLength(20, { message: 'Имя должно содержать максимум 20 символов.' })
	@MinLength(2, { message: 'Имя должно содержать минимум 2 символа.' })
	public readonly name: string
}
