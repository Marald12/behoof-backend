import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { BrandDto } from './brand.dto'

@Injectable()
export class BrandService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: BrandDto) {
		const brand = await this.prismaService.brand.create({
			data: dto
		})

		await this.prismaService.category.update({
			where: {
				id: dto.categoryId
			},
			data: {
				brands: {
					connect: {
						id: brand.id
					}
				}
			}
		})

		return brand
	}

	public async findAll() {
		return this.prismaService.brand.findMany({
			include: {
				category: true,
				products: true
			}
		})
	}

	public async findById(id: string) {
		const brand = await this.prismaService.brand.findUnique({
			where: {
				id
			},
			include: {
				category: true,
				products: true
			}
		})
		if (!brand) throw new NotFoundException('Бренд не найден.')

		return brand
	}
}
