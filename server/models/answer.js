import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const AnswerSchema = Schema({
  description: { type: String, required: true },
  createdAt: { type: String, default: Date.now, required: true },
  user: { type: ObjectId, ref: 'User', required: true }
})

export default mongoose.model('Answer', AnswerSchema)
