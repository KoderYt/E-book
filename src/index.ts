import express, {Request, Response} from 'express'
const app = express()
app.listen(8080)

import UserRouter from './user/user.routes'
app.use('/user', UserRouter)