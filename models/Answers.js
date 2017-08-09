const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: {
      type: String
    },
    answerer: {type: mongoose.Schema.Types.Object, ref: "User"},
    _questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions'
  }
})

answerSchema.pre('findOne', function() {
  this.populate('_questionId')
})


module.exports = mongoose.model("Answers", answerSchema)
