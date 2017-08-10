const
  express = require('express'),
  //nesting this route by attaching them as middleware on an other router, with or without params
  //this way, it can access the params from the parent router.
  answerRouter = new express.Router({mergeParams: true}),
  answerCtrl = require('../controllers/answers.js')

  answerRouter.route('/')
    .post(answerCtrl.create)

module.exports = answerRouter
