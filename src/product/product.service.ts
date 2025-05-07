import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductService {
	constructor(private readonly prismaService: PrismaService) {
	}

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

	public async filterProducts(
		brands?: string[],
		minPrice?: number,
		maxPrice?: number,
		battery?: number,
		memory?: number,
		screen?: number,
		category?: string,
		allRating?: number,
		portabilityCount?: number,
		skip?: number,
		take?: number
	) {
		return this.prismaService.product.findMany({
			where: {
				categoryId: category,
				brandId: brands ? { in: brands } : undefined,
				price:
					minPrice !== undefined || maxPrice !== undefined
						? {
							...(minPrice !== undefined ? { gte: minPrice } : {}),
							...(maxPrice !== undefined ? { lte: maxPrice } : {})
						}
						: undefined,
				AND: [
					battery
						? { characteristics: { path: ['batteryCount'], equals: battery } }
						: {},
					memory
						? {
							characteristics: { path: ['memory'], array_contains: [memory] }
						}
						: {},
					screen
						? { characteristics: { path: ['displayCount'], equals: screen } }
						: {},
					allRating
						? { characteristics: { path: ['answerCount'], equals: allRating } }
						: {},
					portabilityCount
						? {
							characteristics: {
								path: ['portabilityCount'],
								equals: portabilityCount
							}
						}
						: {}
				].filter(condition => Object.keys(condition).length > 0)
			},
			include: {
				reviews: true,
				brand: true,
				category: true
			},
			skip,
			take
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
				colors: true,
				reviews: {
					include: {
						user: true
					}
				}
			}
		})
	}

	public async findPopularProducts() {
		return this.prismaService.product.findMany({
			orderBy: {
				viewsCount: 'desc'
			},
			include: {
				category: true,
				brand: true,
				colors: true
			},
			take: 10
		})
	}

	public async searchProducts(search: string) {
		const products = await this.prismaService.product.findMany({
			where: {
				OR: [
					{
						title: {
							contains: search,
							mode: 'insensitive'
						}
					},
					{
						category: {
							title: {
								contains: search,
								mode: 'insensitive'
							}
						}
					},
					{
						brand: {
							title: {
								contains: search,
								mode: 'insensitive'
							}
						}
					}
				]
			},
			include: {
				category: true,
				brand: true,
				colors: true
			},
			take: 5,
			orderBy: {
				viewsCount: 'desc'
			}
		})

		return search.length >= 1 ? products : []
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
