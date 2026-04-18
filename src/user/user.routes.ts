import express from 'express'
const UserRouter = express.Router()
import { fetchUser } from './user.controller'

UserRouter.get('/', fetchUser)

export default UserRouter