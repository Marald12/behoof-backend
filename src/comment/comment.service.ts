import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CommentDto } from './comment.dto'

@Injectable()
export class CommentService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(userId: string, dto: CommentDto) {
		const article = await this.prismaService.article.findUnique({
			where: { id: dto.articleId }
		})
		if (!article) throw new NotFoundException('Пост не найден.')

		return this.prismaService.comment.create({
			data: {
				comment: dto.comment,
				user: { connect: { id: userId } },
				article: { connect: { id: dto.articleId } }
			}
		})
	}

	public async findAll(articleId?: string) {
		return this.prismaService.comment.findMany({
			where: { articleId },
			include: {
				article: true,
				user: true
			}
		})
	}
}
