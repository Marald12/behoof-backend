import { Field, InputType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

@InputType()
export class UpdateUserDto {
	@Field({ nullable: true })
	@IsOptional()
	public readonly country?: string

	@Field({ nullable: true })
	@IsOptional()
	public readonly city?: string

	@Field({ nullable: true })
	@IsOptional()
	public readonly name?: string
}
