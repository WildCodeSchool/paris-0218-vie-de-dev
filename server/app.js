const express = require('express')
// const fs = require('fs')
// const util = require('util')
// const path = require('path')
// const readFile = util.promisify(fs.readFile)
// const readdir = util.promisify(fs.readdir)
const db = require('./db.js')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const user1 = require('../mocks/user/1.json')
const user2 = require('../mocks/user/2.json')
const user3 = require('../mocks/user/3.json')
const user4 = require('../mocks/user/4.json')

const comment1 = require('../mocks/comment/1.json')
const comment2 = require('../mocks/comment/2.json')

// ajout de routes notamment pour le post
const routePost = require('./routes/postRoutes')

const users = [user1, user2, user3, user4
]

const comments = [ comment1, comment2 ]

const secret = 'vdd is great'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin) // Clever, not a good practise though..
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

// Setup session handler
app.use(session({
  secret,
  saveUninitialized: false,
  resave: true,
  store: new FileStore({ secret }),
}))

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, { user: req.session.user, cookie: req.headers.cookie })
  next()
})

// route permettant de poster les nouveaux votes pour chaque post
app.use('/post', routePost)

app.get('/', (req, res) => {
  const user = req.session.user || {}
  res.json(user)
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/posts', (req, res) => {
  db.getPosts()
    .then(posts => res.json(posts))
})

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.post('/sign-in', (req, res, next) => {
  // does user exists ?
  const user = users.find(u => req.body.name === u.name)

  // Error handling
  if (!user) {
    return res.json({ error: 'User not found' })
  }

  if (user.password !== req.body.password) {
    return res.json({ error: 'Wrong password' })
  }

  // else, set the user into the session
  req.session.user = user

  res.json(user)
})

app.get('/sign-out', (req, res, next) => {
  req.session.user = {}

  res.json('ok')
})

app.use((err, req, res, next) => {
  if (err) {
    res.json({ message: err.message })
    console.error(err)
  }

  next(err)
})


app.listen(3000, () => console.log('serveur écoute sur port 3000'))
