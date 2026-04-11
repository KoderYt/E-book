import express from 'express'
const CartRouter = express.Router()
import { fetchCart } from './cart.controller'

CartRouter.get('/', fetchCart)

export default CartRouter