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
}
