import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import * as process from 'node:process'
import { MediaResolver } from './media/media.resolver'
import { ServeStaticModule } from '@nestjs/serve-static'
import { CategoryModule } from './category/category.module'
import { BrandModule } from './brand/brand.module'
import { ProductModule } from './product/product.module'
import { ColorModule } from './color/color.module'
import { ReviewModule } from './review/review.module'
import { QuestionModule } from './question/question.module'
import { ArticleModule } from './article/article.module'
import { CommentModule } from './comment/comment.module'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: process.env.NODE_ENV === 'development',
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			context: ({ req, res }) => ({ req, res })
		}),
		ConfigModule.forRoot({
			envFilePath: '.env',
			isGlobal: true
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'uploads'),
			serveRoot: '/uploads'
		}),
		UserModule,
		PrismaModule,
		AuthModule,
		CategoryModule,
		BrandModule,
		ProductModule,
		ColorModule,
		ReviewModule,
		QuestionModule,
		ArticleModule,
		CommentModule
	],
	providers: [MediaResolver]
})
export class AppModule {}
