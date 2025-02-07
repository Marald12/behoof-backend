import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { QuestionDto } from './question.dto'

@Injectable()
export class QuestionService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(userId: string, dto: QuestionDto) {
		return this.prismaService.question.create({
			data: {
				...dto,
				user: { connect: { id: userId } }
			}
		})
	}

	public async findAll() {
		return this.prismaService.question.findMany({
			include: { user: true }
		})
	}

	public async findById(id: string) {
		const question = await this.prismaService.question.findUnique({
			where: { id },
			include: { user: true }
		})
		if (!question) throw new NotFoundException('Вопрос не найден.')

		return question
	}
}
