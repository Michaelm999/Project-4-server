const
  express = require('express'),
  //makes answerRoutes be a part of the question routes
  answerRouter = new express.Router({mergeParams: true}),
  answerCtrl = require('../controllers/answers.js')

  answerRouter.route('/')
    .post(answerCtrl.create)

module.exports = answerRouter
