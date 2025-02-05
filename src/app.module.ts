import { Module } from '@nestjs/common'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: true,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			context: ({ req }) => ({ request: req })
		}),
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		}),
		UserModule,
		PrismaModule
	],
	providers: [AppResolver, AppService]
})
export class AppModule {}
