import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from '../shared/prismagraphql/user'
import { Auth } from '../auth/auth.decorator'
import { CurrentUser } from './user.decorator'

@Resolver()
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => User)
	@Auth()
	getProfile(@CurrentUser() userId: string) {
		return this.userService.findById(userId)
	}
}
