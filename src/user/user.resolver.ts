import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from '../shared/prismagraphql/user'

@Resolver()
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => [User])
	findUsers() {
		return this.userService.findAll()
	}
}
