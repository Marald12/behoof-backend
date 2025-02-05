import 'express-session'
import { User } from './shared/prismagraphql/user'

declare module 'express-session' {
	interface SessionData {
		user?: User
	}
}
