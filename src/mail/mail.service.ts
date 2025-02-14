import {
	forwardRef,
	HttpException,
	HttpStatus,
	Inject,
	Injectable
} from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'
import { join } from 'path'
import { ConfigService } from '@nestjs/config'
import { UserService } from '../user/user.service'

@Injectable()
export class MailService {
	constructor(
		private readonly mailerService: MailerService,
		private readonly configService: ConfigService,
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService
	) {}

	public async sendConfirmMail(email: string, token: string) {
		const clientAddress = this.configService.get<string>('ALLOWED_ORIGIN')
		const user = await this.userService.findByEmail(email)

		return await this.mailerService
			.sendMail({
				to: email,
				subject: 'Смена пароля',
				template: join(
					__dirname,
					'..',
					'shared',
					'templates',
					'changePassword.ejs'
				),
				context: {
					username: user.name,
					urlConfirmAddress: `${clientAddress}/change-password/${token}`
				}
			})
			.catch(e => {
				throw new HttpException(
					`Ошибка работы почты: ${JSON.stringify(e)}`,
					HttpStatus.UNPROCESSABLE_ENTITY
				)
			})
	}
}
