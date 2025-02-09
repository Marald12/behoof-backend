import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { Category } from '../shared/prismagraphql/category'
import { CategoryDto } from './category.dto'

@Resolver()
export class CategoryResolver {
	constructor(private readonly categoryService: CategoryService) {}

	@Mutation(() => Category)
	public createCategory(@Args('body') body: CategoryDto) {
		return this.categoryService.create(body)
	}

	@Query(() => [Category])
	public findAllCategories() {
		return this.categoryService.findAll()
	}

	@Query(() => Category)
	public findByIdCategory(@Args('id') id: string) {
		return this.categoryService.findOne(id)
	}

	@Query(() => [Category])
	public getCategoriesForMenu() {
		return this.categoryService.getForMenu()
	}
}
