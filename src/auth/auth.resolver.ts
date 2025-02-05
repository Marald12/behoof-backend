import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { User } from '../shared/prismagraphql/user'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { AuthDto } from './auth.dto'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => User)
	public register(@Args('body') body: CreateUserDto, @Context() context: any) {
		return this.authService.register(context.req, body)
	}

	@Mutation(() => User)
	public login(@Args('body') body: AuthDto, @Context() context: any) {
		return this.authService.login(context.req, body)
	}

	@Mutation(() => String)
	public logout(@Context() context: any) {
		return this.authService.logout(context.req, context.res)
	}
}
