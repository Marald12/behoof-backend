import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts'
import { UploadedFile } from './media.model'

@Resolver()
export class MediaResolver {
	@Mutation(() => UploadedFile)
	async uploadFile(
		@Args('file', { type: () => GraphQLUpload }) file: FileUpload
	): Promise<UploadedFile> {
		const { createReadStream, filename } = file

		const stream = createReadStream()
		const pathName = `./uploads/${filename}`
		const out = require('fs').createWriteStream(pathName)
		stream.pipe(out)
		await new Promise((resolve, reject) => {
			out.on('finish', resolve)
			out.on('error', reject)
		})

		return { filename, url: `/uploads/${filename}` }
	}
}
