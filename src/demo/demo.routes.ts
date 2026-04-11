import express from 'express'
const DemoRouter = express.Router()
import { fetchDemo } from './demo.controller'

DemoRouter.get('/', fetchDemo)

export default DemoRouter