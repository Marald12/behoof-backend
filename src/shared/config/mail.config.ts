import { ConfigService } from '@nestjs/config'
import { MailerOptions } from '@nestjs-modules/mailer'
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'

export const getMailConfig = async (
	configService: ConfigService
): Promise<MailerOptions> => {
	const transport = configService.get<string>('MAIL_TRANSPORT')
	const mailFromName = configService.get<string>('MAIL_NAME')
	const mailFromAddress = transport!.split(':')[1].split('//')[1]

	return {
		transport,
		defaults: {
			from: `"${mailFromName}" <${mailFromAddress}>`
		},
		template: {
			adapter: new EjsAdapter(),
			options: {
				strict: false
			}
		}
	}
}
