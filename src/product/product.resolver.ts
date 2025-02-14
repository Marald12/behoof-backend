import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProductService } from './product.service'
import { Product } from '../shared/prismagraphql/product'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Resolver()
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}

	@Mutation(() => Product)
	public createProduct(@Args('body') body: CreateProductDto) {
		return this.productService.create(body)
	}

	@Query(() => [Product])
	public findAllProducts() {
		return this.productService.findAll()
	}

	@Query(() => [Product])
	public filterProducts(
		@Args('brands', { type: () => [String], nullable: true }) brands?: string[],
		@Args('minPrice', { nullable: true }) minPrice?: number,
		@Args('maxPrice', { nullable: true }) maxPrice?: number,
		@Args('battery', { nullable: true }) battery?: number,
		@Args('memory', { nullable: true }) memory?: number,
		@Args('screen', { nullable: true }) screen?: number
	) {
		return this.productService.filterProducts(
			brands,
			minPrice,
			maxPrice,
			battery,
			memory,
			screen
		)
	}

	@Query(() => Product)
	public findProductById(@Args('id') id: string) {
		return this.productService.findById(id)
	}

	@Query(() => [Product])
	public findPopularProducts() {
		return this.productService.findPopularProducts()
	}

	@Query(() => [Product])
	public searchProducts(@Args('search') search: string) {
		return this.productService.searchProducts(search)
	}

	@Mutation(() => Product)
	public updateProduct(
		@Args('id') id: string,
		@Args('body') body: UpdateProductDto
	) {
		return this.productService.update(id, body)
	}

	@Mutation(() => Product)
	public deleteProduct(@Args('id') id: string) {
		return this.productService.delete(id)
	}
}
