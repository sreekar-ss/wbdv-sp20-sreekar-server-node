
const quizzesService = require('../services/quizzes.service.server')
module.exports = function (app) {


    app.get('/api/quizzes', (req,res) =>
        res.send(quizzesService
            .findAllQuizzes()))

    app.get('/api/quizzes/:quizId', (req, res) =>
        res.json(quizzesService
            .findQuizById(req.params['quizId'])))
}





