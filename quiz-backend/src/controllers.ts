import { Request, Response } from 'express'
import Question from './models'

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' })
  }
}
