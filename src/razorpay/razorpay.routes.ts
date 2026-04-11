import express from 'express'
const RazorpayRouter = express.Router()
import { fetchRazorpay } from './razorpay.controller'

RazorpayRouter.get('/', fetchRazorpay)

export default RazorpayRouter