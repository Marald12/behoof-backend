import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CategoryDto } from './category.dto'

@Injectable()
export class CategoryService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CategoryDto) {
		return this.prismaService.category.create({
			data: dto
		})
	}

	public async findAll() {
		return this.prismaService.category.findMany({
			include: {
				brands: true,
				products: true
			}
		})
	}

	public async findOne(id: string) {
		const category = await this.prismaService.category.findUnique({
			where: { id },
			include: {
				brands: true,
				products: true
			}
		})
		if (!category) throw new NotFoundException('Категория не найдена.')

		return category
	}

	public async getForMenu(brandId: string, categoryId: string) {
		const categories = await this.prismaService.category.findMany({
			include: {
				brands: {
					include: {
						products: true
					}
				}
			}
		})

		const filteredProducts: any[] = []

		categories.forEach(c =>
			c.brands.forEach(b => {
				if (b.id !== brandId) return

				b.products.forEach(p => {
					if (p.brandId === b.id) filteredProducts.push(p)
				})
			})
		)

		return filteredProducts
			.filter(i => i.categoryId === categoryId)
			.filter(
				(product, index, self) =>
					index === self.findIndex(p => p.id === product.id)
			)
	}
}
