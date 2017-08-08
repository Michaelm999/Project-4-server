const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: String,
    text: String,
    asker: {type: mongoose.Schema.Types.Object, ref: "User"},
    answers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Answers"
        }
    ]
});

questionSchema.pre("findOne", function() {
  this.populate("answers")
})

module.exports = mongoose.model("Questions", questionSchema)
