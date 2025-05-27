import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { hash } from 'argon2'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { MailService } from '../mail/mail.service'
import { Token } from '../shared/prismagraphql/token'

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		@Inject(forwardRef(() => MailService))
		private readonly mailService: MailService
	) {
	}

	public async createUser(body: CreateUserDto) {
		const user = await this.prismaService.user.findUnique({
			where: { email: body.email }
		})
		if (user)
			throw new BadRequestException(
				'Пользователь с таким email уже существует.'
			)

		return this.prismaService.user.create({
			data: {
				...body,
				password: await hash(body.password)
			}
		})
	}

	public async findByEmail(email: string) {
		const user = await this.prismaService.user.findUnique({
			where: { email }
		})
		if (!user)
			throw new BadRequestException('Пользователь с таким email не найден.')

		return user
	}

	public async findById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: { id },
			include: {
				questions: true,
				reviews: true,
				articles: true,
				favoriteProducts: {
					include: {
						category: true,
						colors: true,
						brand: true
					}
				},
				comments: true
			}
		})
		if (!user) throw new BadRequestException('Пользователь не найден.')

		return user
	}

	public async findByIdNoValid(id: string) {
		return this.prismaService.user.findUnique({
			where: { id }
		})
	}

	public async updateUser(id: string, dto: UpdateUserDto) {
		await this.findById(id) // Проверка на существование пользователя

		if (dto.country && !dto.city) {
			await this.prismaService.user.update({
				where: { id: id },
				data: { ...dto, country: dto.country, city: '' },
				include: {
					questions: true,
					reviews: true,
					articles: true,
					favoriteProducts: true,
					comments: true
				}
			})

			return await this.findById(id)
		}

		await this.prismaService.user.update({
			where: { id: id },
			data: { ...dto },
			include: {
				questions: true,
				reviews: true,
				articles: true,
				favoriteProducts: true,
				comments: true
			}
		})

		return await this.findById(id)
	}

	public async createTokenAndSendMail(id: string) {
		const user = await this.findById(id)

		const token = await this.prismaService.token.create({
			data: {
				type: 'PASSWORD',
				email: user.email
			}
		})

		await this.mailService.sendConfirmMail(user.email, token.token)

		setTimeout(
			async () => {
				await this.prismaService.token.delete({
					where: { id: token.id }
				})
			},
			30 * 60 * 1000
		)

		return token
	}

	public async changePassword(token: string, password: string) {
		const tokenData = (await this.prismaService.token.findUnique({
			where: { token }
		})) as Token
		const user = await this.findByEmail(tokenData.email)
		if (!tokenData) {
			throw new NotFoundException('Токен восстановления не найден.')
		}

		await this.prismaService.user.update({
			where: { id: user.id },
			data: {
				password: await hash(password)
			}
		})

		await this.prismaService.token.delete({ where: { id: tokenData.id } })

		return await this.findById(user.id)
	}

	public async checkToken(token: string) {
		const tokenData = await this.prismaService.token.findUnique({
			where: { token }
		})
		if (!tokenData) throw new NotFoundException('Токен не найден.')

		return tokenData
	}

	public async addProductToFavorite(userId: string, productId: string) {
		const product = await this.prismaService.product.findUnique({
			where: { id: productId }
		})
		if (!product) throw new NotFoundException('Продукт не найден.')

		const isFavorite = await this.prismaService.user.findFirst({
			where: {
				id: userId,
				favoriteProducts: {
					some: { id: productId }
				}
			}
		})

		if (isFavorite) throw new BadRequestException('Продукт уже в избранном.')

		await this.prismaService.user.update({
			where: { id: userId },
			data: {
				favoriteProducts: {
					connect: { id: productId }
				}
			}
		})

		return this.findById(userId)
	}

	public async removeProductFromFavorite(userId: string, productId: string) {
		const product = await this.prismaService.product.findUnique({
			where: { id: productId }
		})
		if (!product) throw new NotFoundException('Продукт не найден.')

		const isFavorite = await this.prismaService.user.findFirst({
			where: {
				id: userId,
				favoriteProducts: {
					some: { id: productId }
				}
			}
		})

		if (!isFavorite) throw new Error('Продукта нет в избранном.')

		await this.prismaService.user.update({
			where: { id: userId },
			data: {
				favoriteProducts: {
					disconnect: { id: productId }
				}
			}
		})

		return this.findById(userId)
	}
}
