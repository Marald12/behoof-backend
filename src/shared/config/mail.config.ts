import { ConfigService } from '@nestjs/config'
import { MailerOptions } from '@nestjs-modules/mailer'
import { createTransport } from 'nodemailer'
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter'

export const getMailConfig = async (
	configService: ConfigService
): Promise<MailerOptions> => ({
	transport: createTransport({
		service: 'gmail',
		auth: {
			user: configService.getOrThrow<string>('GMAIL_USER'),
			pass: configService.getOrThrow<string>('GMAIL_PASSWORD')
		}
	}),
	defaults: {
		from: `Behoof <${configService.getOrThrow<string>('GMAIL_USER')}>`
	},
	template: {
		adapter: new EjsAdapter(),
		options: {
			strict: false
		}
	}
})
