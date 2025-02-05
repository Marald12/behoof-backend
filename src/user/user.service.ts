import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

	async findAll() {
		return this.prismaService.user.findMany()
	}

	async createUser(email: string, password: string) {
		return this.prismaService.user.create({
			data: {
				email,
				password
			}
		})
	}
}
