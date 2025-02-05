import {
	BadRequestException,
	Injectable,
	InternalServerErrorException,
	UnauthorizedException
} from '@nestjs/common'
import { UserService } from '../user/user.service'
import { User } from '../shared/prismagraphql/user'
import { Request, Response } from 'express'
import { verify } from 'argon2'
import { ConfigService } from '@nestjs/config'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { AuthDto } from './auth.dto'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService
	) {}

	public async register(req: Request, body: CreateUserDto) {
		const user = await this.userService.createUser({ ...body })

		return await this.saveSession(req, user)
	}

	public async login(req: Request, dto: AuthDto) {
		const user = await this.userService.findByEmail(dto.email)

		if (req.session.userId)
			throw new BadRequestException('Вы уже авторизованы.')

		const isValidPassword = await verify(user.password, dto.password)
		if (!isValidPassword) {
			throw new UnauthorizedException('Неверный логин или пароль.')
		}

		return await this.saveSession(req, user)
	}

	public async logout(req: Request, res: Response): Promise<string> {
		return new Promise((resolve, reject) => {
			if (!req.session.userId)
				return reject(
					new UnauthorizedException(
						'Вы не авторизованы, чтобы выйти из аккаунта.'
					)
				)

			req.session.destroy(err => {
				if (err)
					return reject(
						new InternalServerErrorException('Не удалось завершить сессию.')
					)

				res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'))
				resolve('Вы успешно вышли из аккаунта.')
			})
		})
	}

	private async saveSession(req: Request, user: User) {
		return new Promise((resolve, reject) => {
			req.session.userId = user.id

			req.session.save(err => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							'Не удалось сохранить сессию. Проверьте, правильно ли настроены параметры сесси.'
						)
					)
				}

				resolve(user)
			})
		})
	}
}
