import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateArticleDto } from './dto/create-article.dto'

@Injectable()
export class ArticleService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(userId: string, dto: CreateArticleDto) {
		return this.prismaService.article.create({
			data: {
				title: dto.title,
				tags: dto.tags,
				banner: dto.banner,
				category: { connect: { id: dto.categoryId } },
				user: { connect: { id: userId } },
				content: {
					create: dto.content.map(item => ({ ...item }))
				}
			}
		})
	}

	public async findAll() {
		return this.prismaService.article.findMany({
			include: {
				content: true,
				user: true,
				category: true,
				comments: true
			}
		})
	}

	public async findById(id: string) {
		const article = await this.prismaService.article.findUnique({
			where: { id },
			include: {
				content: true,
				user: true,
				category: true,
				comments: true
			}
		})
		if (!article) throw new NotFoundException('Пост не найден.')

		return article
	}
}
