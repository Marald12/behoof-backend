import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UploadedFile {
	@Field()
	filename: string

	@Field()
	url: string
}
