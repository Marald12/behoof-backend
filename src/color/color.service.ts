import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ColorDto } from './color.dto'

@Injectable()
export class ColorService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: ColorDto) {
		return this.prismaService.color.create({
			data: dto
		})
	}

	public async findAll() {
		return this.prismaService.color.findMany({
			include: {
				products: true
			}
		})
	}

	public async findById(id: string) {
		const color = await this.prismaService.color.findUnique({
			where: { id },
			include: {
				products: true
			}
		})
		if (!color) throw new NotFoundException('Цвет не найден.')

		return color
	}
}
