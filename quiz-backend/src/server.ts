import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import quizRoutes from './routes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

app.use('/api/quiz', quizRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
