export const fetchQuestions = async () => {
    const response = await fetch('/questions.json')
    return response.json()
  }
  