const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  passport = require('passport'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/jwt',
  port = process.env.PORT || 3001,
  jwt = require('jsonwebtoken'),
  cors = require('cors'),
  User = require('./models/User.js'),
  questionRoutes = require('./routes/questions')

mongoose.connect(mongoUrl, (err) => {
  console.log(err || "Connected to MongoDB.")
})

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

//USER routes
app.get('/', (req, res) => {
  res.json({message: "API root."})
})

app.route('/api/users')
  .get((req, res) => {
    User.find({}, (err, users) => {
      res.json(users)
    })
  })
  .post((req, res) => {
    User.create(req.body, (err, user) => {
      res.json({success: true, message: "User created.", user})
    })
  })
//get individual user
app.route('/api/users/:id')
  .get((req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.json(user)
    })
  })

// the Log In route:
app.post('/api/authenticate', (req, res) => {
  User.findOne({email: req.body.email}, '+password', (err, user) => {
    // if there's no user found, or they put a wrong password:
    if(!user || (user && !user.validPassword(req.body.password))) {
      return res.json({success: false, message: "Incorrect email or password."})
    }
    // otherwise, use mongoose document's toObject() method to get a stripped down version of
    // the user's data as a simple object:
    const userData = user.toObject()
    // remove the password from this object before creating the token:
    delete userData.password
    // create the token, embedding the user's info in the payload of the token:
    const token = jwt.sign(userData, process.env.SECRET)
    // send the token back to the client in our response:
    res.json({success: true, message: "Logged in successfully.", token})
  })
})

app.use(verifyToken)

app.get('/protected', (req, res) => {
  console.log("Current user:")
  console.log(req.user)
  res.json({message: "Welcome to Queston This"})
})

app.use('/api/questions', questionRoutes)

// client must include a token in their request(s) to see the rest of the app
function verifyToken(req, res, next) {
  const token = req.headers['token']
  if(token) {
    // verify the token's authenticity:
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      // what happens if that doesn't work...
      if(err) return res.json({success: false, message: "Token not confirmed."})
      req.user = decoded
      // otherwise you go on to the next step
      next()
    })
  } else { // if token is NOT provided in the request headers:
    res.json({success: false, message: "No token provided. Access denied."})
  }
}

app.listen(port, (err) => {
  console.log(err || `Server running on ${port}.`)
})
