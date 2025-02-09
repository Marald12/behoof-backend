import { forwardRef, Global, Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { MailModule } from '../mail/mail.module'

@Global()
@Module({
	imports: [forwardRef(() => MailModule)],
	providers: [UserResolver, UserService],
	exports: [UserService]
})
export class UserModule {}
