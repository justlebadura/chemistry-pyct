import { Router } from 'express'
import { getQuestions } from './controllers'

const router = Router()

router.get('/questions', getQuestions)

export default router
