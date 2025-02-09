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
import { v4 as uuidv4 } from 'uuid'
import { UserService } from '../user/user.service'

@Injectable()
export class MailService {
	constructor(
		private readonly mailerService: MailerService,
		private readonly configService: ConfigService,
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService
	) {}

	public async sendConfirmMail(userId: string) {
		const clientAddress = this.configService.get<string>('ALLOWED_ORIGIN')
		const user = await this.userService.findById(userId)

		const token = uuidv4()

		return await this.mailerService
			.sendMail({
				to: user.email,
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
