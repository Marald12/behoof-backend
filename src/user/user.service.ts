import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { hash } from 'argon2'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

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
			where: { id }
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

		return this.prismaService.user.update({
			where: { id },
			data: dto
		})
	}
}
