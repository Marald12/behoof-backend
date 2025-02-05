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

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService
	) {}

	async register(req: Request, name: string, email: string, password: string) {
		const user = await this.userService.createUser(name, email, password)

		return await this.saveSession(req, user)
	}

	async login(req: Request, email: string, password: string) {
		const user = await this.userService.findByEmail(email)

		if (req.session.userId)
			throw new BadRequestException('Вы уже авторизованы.')

		const isValidPassword = await verify(user.password, password)
		if (!isValidPassword) {
			throw new UnauthorizedException('Неверный логин или пароль.')
		}

		return await this.saveSession(req, user)
	}

	async logout(req: Request, res: Response): Promise<string> {
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
