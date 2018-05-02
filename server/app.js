const express = require('express')
// const fs = require('fs')
// const util = require('util')
const path = require('path')
// const readFile = util.promisify(fs.readFile)
// const readdir = util.promisify(fs.readdir)
const db = require('./db.js')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const comment1 = require('../mocks/comment/1.json')
const comment2 = require('../mocks/comment/2.json')
// ajout de routes notamment pour le post
const routePost = require('./routes/postRoutes')
// const users = [user1, user2, user3, user4]
const comments = [ comment1, comment2 ]
const usersNames = []
const usersEmails = []
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
  store: new FileStore({ secret, path: path.join(__dirname, 'sessions') })
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
  db.getUsers()
    .then(users => res.json(users))
})

app.get('/posts', (req, res) => {
  db.getPosts()
    .then(posts => res.json(posts))
})

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.post('/sign-in', (req, res, next) => {
  db.getUsers()
    .then(users => {
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
})

app.get('/sign-out', (req, res, next) => {
  req.session.user = {}

  res.json('ok')
})

// route pour page comment
app.get('/postComment/:id', (req, res, next) => {
  db.getPost(req.params.id)
    .then(post => res.json(post))
    .catch(next)
})

app.get('/comments/:postId', (req, res, next) => {
  db.getCommentsOfPost(req.params.postId)
    .then(comments => res.json(comments))
    .catch(next)
})

app.post('/addComments', (req, res, next) => {
  db.addComment(req.body)
    .then(() => db.getCommentsOfPost(req.body.postId)
      .then(res => res.end(JSON.stringify(res))))
    .catch(next)
})

app.post('/addUser', (req, res, next) => {
  db.getUsers()
    .then(users => {
      for (let elem of users) {
        usersEmails.push(elem.email)
      }
      for (let elem of users) {
        usersNames.push(elem.name)
      }
      if (usersNames.includes(req.body.name)) {
        return res.json({ error: 'Le nom existe deja' })
      } else if (usersEmails.includes(req.body.email)) {
        return res.json({ error: `L'email existe deja` })
      } else {
        db.addUser(req.body)
          .then(() => res.json('ok'))
          .catch(next)
      }
    })
})

app.use((err, req, res, next) => {
  if (err) {
    res.json({ message: err.message })
    console.error(err)
  }

  next(err)
})

app.listen(3000, () => console.log('serveur écoute sur port 3000'))
