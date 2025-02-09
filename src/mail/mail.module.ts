import { forwardRef, Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { MailerModule } from '@nestjs-modules/mailer'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getMailConfig } from '../shared/config/mail.config'
import { UserModule } from '../user/user.module'

@Module({
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMailConfig
		}),
		forwardRef(() => UserModule)
	],
	providers: [MailService],
	exports: [MailService]
})
export class MailModule {}
