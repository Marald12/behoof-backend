import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { User } from '../shared/prismagraphql/user'
import { Request } from 'express'

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	async register(req: Request, name: string, email: string, password: string) {
		const user = await this.userService.createUser(name, email, password)

		return await this.saveSession(req, user)
	}

	async login() {}

	private async saveSession(req: Request, user: User) {
		return new Promise((resolve, reject) => {
			req.session.user = user

			req.session.save(err => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							'Не удалось сохранить сессию. Проверьте, правильно ли настроены параметры сесси.'
						)
					)
				}

				resolve({
					user: user
				})
			})
		})
	}
}
