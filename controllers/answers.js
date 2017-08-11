const Question = require('../models/Questions.js')

function create(req, res) {
	console.log(req.body);
	console.log(req.params)
  Question.findById(req.params.id, (err, question) => {
		console.log(question)
    if (err) return err;

    console.log(question);
    var newAn = Object.assign({}, req.body, {answerer: req.user.name})
		question.answers.push(newAn)
    console.log(newAn);
    console.log("++++++++++++++++++++++");
    question.save((err, question) => {
      res.json({success: true, message: "question answered", question:question})
    })
  })
}

module.exports = {
	create: create
}
