import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import IORedis from 'ioredis'
import { ms, StringValue } from './shared/utils/ms.util'
import { RedisStore } from 'connect-redis'
import * as session from 'express-session'
import { parseBoolean } from './shared/utils/parse-boolean.util'
import { graphqlUploadExpress } from 'graphql-upload-ts'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.use(
		'/graphql',
		graphqlUploadExpress({ maxFileSize: 100000000, maxFiles: 10 })
	)

	const config = app.get(ConfigService)
	const redis = new IORedis({
		host: config.getOrThrow<string>('REDIS_HOST'),
		password: config.getOrThrow<string>('REDIS_PASSWORD'),
		port: config.getOrThrow<number>('REDIS_PORT')
		// username: config.getOrThrow<string>('REDIS_USER')
	})

	app.use(cookieParser(config.getOrThrow<string>('COOKIES_SECRET')))

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true
		})
	)

	app.use(
		session({
			secret: config.getOrThrow<string>('SESSION_SECRET'),
			name: config.getOrThrow<string>('SESSION_NAME'),
			resave: false,
			saveUninitialized: false,
			cookie: {
				domain: config.getOrThrow<string>('SESSION_DOMAIN'),
				maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
				httpOnly: parseBoolean(config.getOrThrow<string>('SESSION_HTTP_ONLY')),
				secure: parseBoolean(config.getOrThrow<string>('SESSION_SECURE')),
				sameSite: 'lax'
			},
			store: new RedisStore({
				client: redis,
				prefix: config.getOrThrow<string>('SESSION_FOLDER')
			})
		})
	)

	app.enableCors({
		origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
		credentials: true,
		exposedHeaders: ['set-cookie']
	})

	await app.listen(config.getOrThrow<number>('APPLICATION_PORT') || 3003)
}

bootstrap()
