import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const RazorpayModel = model('Razorpay', schema)
export default RazorpayModel