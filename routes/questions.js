const
  express = require('express'),
  questionRouter = new express.Router()
  questions = require('../controllers/questions.js')

  questionRouter.route('/')
    .get(questions.index)
    .post(questions.create)

  questionRouter.route('/:id')
    .get(questions.show)
    .patch(questions.update)
    .delete(questions.destroy)

module.exports = questionRouter
