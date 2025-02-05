import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { User } from '../shared/prismagraphql/user'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => User)
	register(
		@Args('name') name: string,
		@Args('email') email: string,
		@Args('password') password: string,
		@Context() context: any
	) {
		return this.authService.register(context.req, name, email, password)
	}

	@Mutation(() => User)
	login(
		@Args('email') email: string,
		@Args('password') password: string,
		@Context() context: any
	) {
		return this.authService.login(context.req, email, password)
	}

	@Mutation(() => String)
	logout(@Context() context: any) {
		return this.authService.logout(context.req, context.res)
	}
}
