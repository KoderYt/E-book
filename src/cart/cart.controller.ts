import CartModel from './cart.model'
import { Request, Response } from 'express'

export const fetchCart = (req: Request, res: Response)=>{
	res.send("Hello")
}