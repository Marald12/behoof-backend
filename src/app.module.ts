import { Module } from '@nestjs/common'
import { AppResolver } from './app.resolver'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import * as process from 'node:process'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: process.env.NODE_ENV === 'development',
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			context: ({ req }) => ({ request: req })
		}),
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		}),
		UserModule,
		PrismaModule,
		AuthModule
	],
	providers: [AppResolver, AppService]
})
export class AppModule {}
