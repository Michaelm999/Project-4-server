const
  express = require('express'),
  questionRouter = new express.Router()
  questions = require('../controllers/questions.js'),
  answerRoutes = require('./answers')

  questionRouter.route('/')
    .get(questions.index)
    .post(questions.create)

  questionRouter.route('/:id')
    .get(questions.show)
    .patch(questions.update)
    .delete(questions.destroy)

  questionRouter.use('/:id/answers', answerRoutes)

module.exports = questionRouter
