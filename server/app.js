const express = require('express')
const user1 = require('../mocks/user/1.json')
const user2 = require('../mocks/user/2.json')
const user3 = require('../mocks/user/3.json')
const user4 = require('../mocks/user/4.json')
const post1 = require('../mocks/post/1.json')
const post2 = require('../mocks/post/2.json')
const post3 = require('../mocks/post/3.json')
const post4 = require('../mocks/post/4.json')
const comment1 = require('../mocks/comment/1.json')
const comment2 = require('../mocks/comment/2.json')

const users = [ user1, user2, user3, user4 ]
const posts = [ post1, post2, post3, post4 ]
const comments = [ comment1, comment2 ]

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Acces-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

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

app.listen(3000, () => console.log('serveur écoute sur port 3000'))
