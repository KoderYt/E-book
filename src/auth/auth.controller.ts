import AuthModel from './auth.model'
import { Request, Response } from 'express'

export const fetchAuth = (req: Request, res: Response)=>{
	res.send("Hello")
}