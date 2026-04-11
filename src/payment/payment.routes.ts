import express from 'express'
const PaymentRouter = express.Router()
import { fetchPayment } from './payment.controller'

PaymentRouter.get('/', fetchPayment)

export default PaymentRouter