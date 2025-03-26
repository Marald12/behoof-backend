import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from '../shared/prismagraphql/user'
import { Auth } from '../auth/auth.decorator'
import { CurrentUser } from './user.decorator'
import { UpdateUserDto } from './dto/update-user.dto'
import { Token } from '../shared/prismagraphql/token'

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

	@Mutation(() => Token)
	@Auth()
	public createTokenAndSendEmail(@CurrentUser() userId: string) {
		return this.userService.createTokenAndSendMail(userId)
	}

	@Mutation(() => Token)
	public async findByEmailAndCreateAndSendEmail(@Args('email') email: string) {
		const user = await this.userService.findByEmail(email)

		return this.userService.createTokenAndSendMail(user.id)
	}

	@Mutation(() => User)
	public changePassword(
		@Args('token') token: string,
		@Args('password') password: string
	) {
		return this.userService.changePassword(token, password)
	}

	@Mutation(() => User)
	@Auth()
	public addProductToFavorite(
		@CurrentUser() userId: string,
		@Args('productId') productId: string
	) {
		return this.userService.addProductToFavorite(userId, productId)
	}

	@Mutation(() => User)
	@Auth()
	public removeProductFromFavorite(
		@CurrentUser() userId: string,
		@Args('productId') productId: string
	) {
		return this.userService.removeProductFromFavorite(userId, productId)
	}

	@Mutation(() => Token)
	public checkToken(@Args('token') token: string) {
		return this.userService.checkToken(token)
	}
}
