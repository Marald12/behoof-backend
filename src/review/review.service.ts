import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ReviewDto } from './review.dto'

@Injectable()
export class ReviewService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(userId: string, { productId, ...dto }: ReviewDto) {
		return this.prismaService.review.create({
			data: {
				...dto,
				user: { connect: { id: userId } },
				product: { connect: { id: productId } }
			}
		})
	}

	public async findAll() {
		return this.prismaService.review.findMany({
			include: {
				user: true,
				product: true
			}
		})
	}

	public async findById(id: string) {
		const review = await this.prismaService.review.findUnique({
			where: { id },
			include: {
				user: true,
				product: true
			}
		})

		if (!review) throw new NotFoundException('Ответ не найден.')

		return review
	}
}
