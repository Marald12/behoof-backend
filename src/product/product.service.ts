import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create({
		categoryId,
		colors,
		brandId,
		...dto
	}: CreateProductDto) {
		return this.prismaService.product.create({
			data: {
				...dto,
				category: {
					connect: {
						id: categoryId
					}
				},
				brand: {
					connect: {
						id: brandId
					}
				},
				colors: {
					connect: colors.map(color => ({ id: color }))
				}
			}
		})
	}

	public async findAll() {
		return this.prismaService.product.findMany({
			include: {
				brand: true,
				category: true,
				colors: true,
				reviews: {
					include: {
						user: true
					}
				}
			}
		})
	}

	public async findById(id: string) {
		const product = await this.prismaService.product.findUnique({
			where: {
				id
			},
			include: {
				brand: true,
				category: true,
				colors: true,
				reviews: {
					include: {
						user: true
					}
				}
			}
		})
		if (!product) throw new NotFoundException('Продукт не найден.')

		await this.prismaService.product.update({
			where: {
				id
			},
			data: {
				viewsCount: {
					increment: 1
				}
			}
		})

		return this.prismaService.product.findUnique({
			where: {
				id
			},
			include: {
				brand: true,
				category: true,
				colors: true
			}
		})
	}

	public async findPopularProducts() {
		return this.prismaService.product.findMany({
			orderBy: {
				viewsCount: 'desc'
			},
			take: 10
		})
	}

	public async update(id: string, dto: UpdateProductDto) {
		return this.prismaService.product.update({
			where: {
				id
			},
			data: dto
		})
	}

	public async delete(id: string) {
		await this.findById(id) // Проверка на существование продукта.

		return this.prismaService.product.delete({
			where: {
				id
			}
		})
	}
}
