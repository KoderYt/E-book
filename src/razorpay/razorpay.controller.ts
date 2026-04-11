import RazorpayModel from './razorpay.model'
import { Request, Response } from 'express'

export const fetchRazorpay = (req: Request, res: Response)=>{
	res.send("Hello")
}