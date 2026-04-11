import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const AdminModel = model('Admin', schema)
export default AdminModel