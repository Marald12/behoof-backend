import { Field, InputType } from '@nestjs/graphql'
import {
	IsEmail,
	IsNotEmpty,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator'

@InputType()
export class AuthDto {
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
}
