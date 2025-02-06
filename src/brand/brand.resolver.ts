import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BrandService } from './brand.service'
import { Brand } from '../shared/prismagraphql/brand'
import { BrandDto } from './brand.dto'

@Resolver()
export class BrandResolver {
	constructor(private readonly brandService: BrandService) {}

	@Mutation(() => Brand)
	public createBrand(@Args('body') body: BrandDto) {
		return this.brandService.create(body)
	}

	@Query(() => [Brand])
	public findAllBrands() {
		return this.brandService.findAll()
	}

	@Query(() => Brand)
	public findBrandById(@Args('id') id: string) {
		return this.brandService.findById(id)
	}
}
