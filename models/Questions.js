const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: {type: String},
  answerer: {type: mongoose.Schema.Types.Object, ref: "User"},
}, {timestamps: true})

const questionSchema = new mongoose.Schema({
    title: String,
    text: String,
    asker: {type: mongoose.Schema.Types.Object, ref: "User"},
    //bring in the answerSchema for the answer section
    answers: [answerSchema]
}, {timestamps: true});

questionSchema.pre("findOne", function() {
  this.populate("answers")
})

const Question = mongoose.model("Questions", questionSchema)
module.exports = Question
