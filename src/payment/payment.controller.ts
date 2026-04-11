import PaymentModel from './payment.model'
import { Request, Response } from 'express'

export const fetchPayment = (req: Request, res: Response)=>{
	res.send("Hello")
}