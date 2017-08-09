const
  express = require('express'),
  answerRouter = new express.Router(),
  answerCtrl = require('../controllers/answers.js')

  answerRouter.route('/')
    .post(answerCtrl.create)

module.exports = answerRouter
