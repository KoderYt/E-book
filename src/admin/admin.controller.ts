import AdminModel from './admin.model'
import { Request, Response } from 'express'

export const fetchAdmin = (req: Request, res: Response)=>{
	res.send("Hello")
}