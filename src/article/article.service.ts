import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateArticleDto } from './dto/create-article.dto'
import { ArticleWhereInput } from '../shared/prismagraphql/article'

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

	public async findAll(
		take?: number,
		skip?: number,
		search?: string,
		categoryId?: string,
		tag?: string
	) {
		const whereConditions: ArticleWhereInput = {}

		if (search) {
			whereConditions.OR = [
				{
					title: {
						contains: search,
						mode: 'insensitive'
					}
				}
			]
		}

		if (tag) {
			whereConditions.OR = whereConditions.OR
				? [...whereConditions.OR, { tags: { has: tag } }]
				: [{ tags: { has: tag } }]
		}

		if (categoryId) {
			whereConditions.category = { is: { id: { equals: categoryId } } }
		}

		return this.prismaService.article.findMany({
			where: whereConditions,
			include: {
				content: true,
				user: true,
				category: true,
				comments: {
					include: {
						user: true
					}
				}
			},
			skip,
			take
		})
	}

	public async findById(id: string) {
		const article = await this.prismaService.article.findUnique({
			where: { id },
			include: {
				content: true,
				user: true,
				category: true,
				comments: {
					include: {
						user: true
					}
				}
			}
		})
		if (!article) throw new NotFoundException('Пост не найден.')

		return article
	}
}
