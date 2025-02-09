import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from '../shared/prismagraphql/user'
import { Auth } from '../auth/auth.decorator'
import { CurrentUser } from './user.decorator'
import { UpdateUserDto } from './dto/update-user.dto'

@Resolver()
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => User)
	@Auth()
	public getProfile(@CurrentUser() userId: string) {
		return this.userService.findById(userId)
	}

	@Mutation(() => User)
	@Auth()
	public updateUser(
		@CurrentUser() userId: string,
		@Args('body') body: UpdateUserDto
	) {
		return this.userService.updateUser(userId, body)
	}

	@Mutation(() => String)
	@Auth()
	public changePassword(@CurrentUser() userId: string) {
		return this.userService.changePassword(userId)
	}
}
