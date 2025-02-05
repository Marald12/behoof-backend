import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { UserService } from '../user/user.service'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly userService: UserService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context)
		const request = ctx.getContext().req

		if (typeof request.session.userId === 'undefined')
			throw new UnauthorizedException('Пользователь не авторизован.')

		const user = await this.userService.findByIdNoValid(request.session.userId)
		if (!user) throw new UnauthorizedException('Пользователь не авторизован.')

		return true
	}
}
