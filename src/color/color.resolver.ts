import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ColorService } from './color.service'
import { Color } from '../shared/prismagraphql/color'
import { ColorDto } from './color.dto'

@Resolver()
export class ColorResolver {
	constructor(private readonly colorService: ColorService) {}

	@Mutation(() => Color)
	public createColor(@Args('body') body: ColorDto) {
		return this.colorService.create(body)
	}

	@Query(() => [Color])
	public findAllColors() {
		return this.colorService.findAll()
	}

	@Query(() => Color)
	public findColorById(@Args('id') id: string) {
		return this.colorService.findById(id)
	}
}
