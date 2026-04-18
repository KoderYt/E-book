import UserModel from './user.model'
import { Request, Response } from 'express'

export const fetchUser = (req: Request, res: Response)=>{
	res.send("Hello")
}