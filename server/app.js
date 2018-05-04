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
// ajout de routes notamment pour le post
const routePost = require('./routes/postRoutes')
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

app.get('/users', (req, res, next) => {
  db.getUsers()
    .then(users => res.json(users))
    .catch(next)
})

app.get('/posts', (req, res, next) => {
  db.getPosts()
    .then(posts => res.json(posts))
    .catch(next)
})

app.post('/sign-in', (req, res, next) => {
  db.getUsers()
    .then(users => {
      const user = users.find(u => req.body.name === u.name)
      // Error handling
      if (!user) {
        const err = Error('User not found')
        err.statusCode = 404
        throw err
      }
      if (user.password !== req.body.password) {
        const err = Error('Wrong password')
        err.statusCode = 403
        throw err
      }
      // else, set the user into the session
      req.session.user = user
      res.json(user)
    })
    .catch(next)
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
    .then(() => db.getCommentsOfPost(req.body.postId))
    .then(res => res.end(JSON.stringify(res)))
    .catch(next)
})

const i18n = {
  name: 'PSEUDO',
  email: 'E-MAIL',
  password: 'MOT DE PASSE'
}

const checkFields = fields => (req, res, next) => {
  const missingFields = fields.filter(field => !req.body[field])
  if (missingFields.length) {
    const key = missingFields[0]
    const err = Error(`${i18n[key]} doit etre renseigne`)
    err.data = { key }
    return next(err)
  }
  next()
}

app.post('/addUser',
  checkFields([ 'name', 'password', 'email' ]),
  (req, res, next) => {
    db.addUser(req.body)
      .then(() => res.json('ok'))
      .catch(err => {
        if (err.code === 'ER_DUP_ENTRY') {
          const key = err.message.split(/for key '(.+)'/)[1]
          err.message = `${i18n[key]} déjà pris`
          err.data = { key }
        }
        next(err)
      })
  })

app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.statusCode || 500)
      .json({ data: err.data, error: err.message })
    return console.error(err)
  }

  next(err)
})

app.listen(3000, () => console.log('serveur écoute sur port 3000'))
