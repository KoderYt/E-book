import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const DemoModel = model('Demo', schema)
export default DemoModel