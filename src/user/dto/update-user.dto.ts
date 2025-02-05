import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateUserDto {
	@Field({ nullable: true })
	public readonly country?: string
	
	@Field({ nullable: true })
	public readonly city?: string

	@Field({ nullable: true })
	public readonly name?: string
}
