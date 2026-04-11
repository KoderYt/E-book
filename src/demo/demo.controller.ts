import DemoModel from './demo.model'
import { Request, Response } from 'express'

export const fetchDemo = (req: Request, res: Response)=>{
	res.send("Hello")
}