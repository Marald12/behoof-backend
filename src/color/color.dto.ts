import { IsHexColor, IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ColorDto {
	@Field()
	@IsString({ message: 'Цвет должно быть строкой.' })
	@IsNotEmpty({ message: 'Цвет не должно быть пустым.' })
	@IsHexColor({ message: 'Цвет должен быть в формате HEX.' })
	public readonly color: string
}
