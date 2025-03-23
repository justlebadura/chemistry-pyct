import { Schema, model } from 'mongoose'

const questionSchema = new Schema({
  question: String,
  options: [String],
  answer: String
})

export default model('Question', questionSchema)
