const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {type: String, select: false},
    bio: String
  })

// Encrypting the password:
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// compares a provided password to the encrypted password.
userSchema.methods.validPassword = function(password) {
  if(!password) return false
  return bcrypt.compareSync(password, this.password)
}
// before saving a new user
userSchema.pre('save', function(next) {
  if(!this.isModified('password')) return next()
  this.password = this.generateHash(this.password)
  next()
})

module.exports = mongoose.model('User', userSchema)
