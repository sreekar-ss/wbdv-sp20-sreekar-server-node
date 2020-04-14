const questions = require('./questions')
const questionsDao = require('../daos/questions.dao.server')

// // findAllQuestions = () => questions
findQuestionById = (qid) =>
    questions.find(question =>
    question._id === qid)
findQuestionsForQuiz = (qzid) =>
    questions.filter(question =>
    question.quizId === qzid
    )

findAllQuestions = () =>
    questionsDao.findAllQuestions()


module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
