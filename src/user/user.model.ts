import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const UserModel = model('User', schema)
export default UserModel