const Answer = require('../models/Answers.js')

function create(req, res, next) {
	console.log("MICHAELLLLLL");
		console.log(req.body);
		var answer = new Answer(req.body)

		answer.save(function(err, answer) {
		    // return 500 if there's an error:
		    if(err) {
					console.log(err);
		    // otherwise send answer json back with 201 create success header:
				}else {
					console.log(answer)
			    res.status(201).send(answer)
				}
		})
	}

module.exports = {
	create: create
}
