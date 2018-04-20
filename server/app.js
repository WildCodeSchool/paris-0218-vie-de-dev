const express = require('express')
const user1 = require('../mocks/user/1.json')
const user2 = require('../mocks/user/2.json')
const user3 = require('../mocks/user/3.json')
const user4 = require('../mocks/user/4.json')
const post1 = require('../mocks/post/1.json')
const post2 = require('../mocks/post/2.json')
const post3 = require('../mocks/post/3.json')
const post4 = require('../mocks/post/4.json')
const post5 = require('../mocks/post/5.json')
const post6 = require('../mocks/post/6.json')
const post7 = require('../mocks/post/7.json')
const comment1 = require('../mocks/comment/1.json')
const comment2 = require('../mocks/comment/2.json')

// ajout de routes notamment pour le post
const routePost = require('./routes/postRoutes')

const users = [ user1, user2, user3, user4 ]
const posts = [post1, post2, post3, post4, post5, post6, post7]
const comments = [ comment1, comment2 ]

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// route permettant de poster les nouveaux votes pour chaque post
app.use('/postVote', routePost)

app.get('/', (req, res) => {
  res.send('OK')
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.get('/comments', (req, res) => {
  res.json(comments)
})

// route permettant de créer un nouveau post via le formulaire
const util = require('util')
const fs = require('fs')
const path = require('path')

const writeFile = util.promisify(fs.writeFile)

app.use((req, res, next) => {
  if (req.method === 'GET') return next()

  let accumulator = ''

  req.on('data', data => {
    accumulator += data
  })

  req.on('end', () => {
    try {
      req.body = JSON.parse(accumulator)
      next()
    } catch (err) {
      next(err)
    }
  })
})

app.post('/posts', (req, res, next) => {
  const id = Math.random().toString(36).slice(2).padEnd(11, '0')
  const filename = `${id}.json`
  const filepath = path.join(__dirname, '../mocks/post/', filename)

  const postContent = {
    id: id,
    userId: '',
    content: req.body.content,
    badVotes: [],
    saltyVotes: [],
    yesVotes: [],
    createAt: Date.now()
  }

  writeFile(filepath, JSON.stringify(postContent), 'utf8')
    .then(() => res.json('OK'))
    .catch(next)
})

app.listen(3000, () => console.log('serveur écoute sur port 3000'))
