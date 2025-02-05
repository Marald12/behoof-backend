import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { User } from '../shared/prismagraphql/user'
import { Req } from '@nestjs/common'
import { Request } from 'express'

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation(() => User)
	register(
		@Args('name') name: string,
		@Args('email') email: string,
		@Args('password') password: string,
		@Req() req: Request
	) {
		return this.authService.register(req, name, email, password)
	}
}
