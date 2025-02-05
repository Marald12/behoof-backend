import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { hash } from 'argon2'

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

	async findAll() {
		return this.prismaService.user.findMany()
	}

	async createUser(name: string, email: string, password: string) {
		const user = await this.prismaService.user.findUnique({
			where: { email }
		})
		if (user)
			throw new BadRequestException('Пользователь с таким email уже существует')

		return this.prismaService.user.create({
			data: {
				name,
				email,
				password: await hash(password)
			}
		})
	}

	async findUserByEmail(email: string) {
		const user = await this.prismaService.user.findUnique({
			where: { email }
		})
		if (!user)
			throw new BadRequestException('Пользователь с таким email не найден')

		return user
	}

	async findByIdNoValid(id: string) {
		return this.prismaService.user.findUnique({
			where: { id }
		})
	}
}
