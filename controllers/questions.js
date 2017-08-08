const Question = require('../models/Questions.js')

// INDEX actions
function index(req, res) {
	Question.find({}, function(err, questions){
    	// return 404 if there's an error:
    	if(err) res.status(404).send(err)
    	// otherwise send json back with 200 success header:
    	res.status(200).send(questions)
	})
}

// POST action
function create(req, res, next) {
	console.log(req.body);
	var question = new Question(req.body)

	question.save(function(err, question) {
	    // return 500 if there's an error:
	    if(err) {
				console.log(err);
	    // otherwise send question json back with 201 create success header:
			}else {
				console.log(question)
		    res.status(201).send(question)
			}
	})
}

// SHOW action
function show(req, res) {
	Question.find({_id: req.params.id}, function(err, question){
	    // return 404 if there's an error:
	    if(err) res.status(404).send(err)
	    // otherwise send question json back with 200 success header:
	    res.status(200).send(question)
	})
}

// UPDATE action
function update(req, res) {
  Question.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, question) => {
    if(err) return (err)
    res.json({success: true, message: "Question updated.", question})
  })
}

// DESTROY action
function destroy(req, res) {
	Question.remove({_id: req.params.id}, function(err){
    // return 500 if there's an error:
    if(err) res.status(500).send(err)
	    // otherwise send bean json back with 200 success header:
	    res.status(200).send({message: "Question deleted successfully"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
