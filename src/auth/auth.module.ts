import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UserService } from '../user/user.service'
import { MailModule } from '../mail/mail.module'

@Module({
	imports: [MailModule],
	providers: [AuthResolver, AuthService, UserService]
})
export class AuthModule {}
