import express from 'express'
const AdminRouter = express.Router()
import { fetchAdmin } from './admin.controller'

AdminRouter.get('/', fetchAdmin)

export default AdminRouter