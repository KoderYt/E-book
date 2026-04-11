import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const CartModel = model('Cart', schema)
export default CartModel