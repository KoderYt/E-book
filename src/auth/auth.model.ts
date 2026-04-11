import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const AuthModel = model('Auth', schema)
export default AuthModel