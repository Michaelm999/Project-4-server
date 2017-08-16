const
  express = require('express'),
  //this route is nested by attaching it as middleware on another router
  //this way, it can access the params from the parent router.
  answerRouter = new express.Router({mergeParams: true}),
  answerCtrl = require('../controllers/answers.js')

  answerRouter.route('/')
    .post(answerCtrl.create)

module.exports = answerRouter
