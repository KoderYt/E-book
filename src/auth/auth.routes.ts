import express from 'express'
const AuthRouter = express.Router()
import { fetchAuth } from './auth.controller'

AuthRouter.get('/', fetchAuth)

export default AuthRouter