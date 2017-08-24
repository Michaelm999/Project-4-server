const
  express = require('express'),
  questionRouter = new express.Router()
  questions = require('../controllers/questions.js'),
  answerRoutes = require('./answers')
//question routes-expand off of the baseURL that is established
  questionRouter.route('/')
    .get(questions.index)
    .post(questions.create)

questionRouter.get('/user-questions', questions.userQuestions)
  
  questionRouter.route('/:id')
    .get(questions.show)
    .patch(questions.update)
    .delete(questions.destroy)

  questionRouter.use('/:id/answers', answerRoutes)

module.exports = questionRouter
