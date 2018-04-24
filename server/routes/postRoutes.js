const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const util = require('util')
const db = require('./../db')

const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)
// const stat = util.promisify(fs.stat)

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/vote/:typeVote', (req, res, next) => {
  console.log('parametre URL POST:' + req.params.typeVote)
  const user = Number(req.body.user)
  const filePath = path.join(__dirname, `../../mocks/post/${req.body.id}.json`)
  // il faut ajouter le user au tableau :typeVote
  // d'abord lire le fichier (readFile)
  // puis write file si user non présent dans tableau
  readFile(filePath, 'utf-8')
    .then(JSON.parse)
    .then(file => {
      // test si user deja present dans array Vote (yes, bad ou salty)
      if (file[`${req.params.typeVote}`].includes(user)) {
        // user deja dans array Vote : on renvoit le post sans write user
        res.header('Content-Type', 'application/json;charset=utf-8')
        res.end(JSON.stringify(file))
      } else {
        // user non present : write user dans array Vote puis renvoye post mis a jour
        file[`${req.params.typeVote}`].push(user)
        const data = JSON.stringify(file, null, 2)
        res.header('Content-Type', 'application/json;charset=utf-8')
        res.end(data)
        return writeFile(filePath, data, 'utf8')
      }
    })
    .catch(next)
})

// nom fichier aleatoire avec test id unique
/* const testId = (id) =>
  stat(getPathFromId(id))
    .then(() => testId(getNewId()))
    .catch(err => {
      if (err.code === 'ENOENT') {
        return id
      }
      throw err
    })

const getNewId = () => Math.random().toString(36).slice(2).padEnd(11, '0').slice(0, 5)
const getPathFromId = id => path.join(__dirname, '../../mocks/post/', `${id}.json`) */

router.post('/soumettre', (req, res, next) => {
  console.log('post/soumettre', req.body)
  // nom fichier aleatoire
  // testId(getNewId())
  // recuperation des donnees de la requete
  /* .then(id => {
      const filePath = getPathFromId(id)
      console.log('createJSON : ', filePath)
      const contentPost = {
        id: id,
        userId: req.body.userId,
        content: req.body.content,
        badVotes: [],
        yesVotes: [],
        saltyVotes: [],
        createAt: Date.now()
      }
      // write (promisify)
      return writeFile(filePath, JSON.stringify(contentPost), 'utf-8')
    }) */
  db.addPost(req.body)
    .then(() => res.json('OK'))
    .catch(next)
})

module.exports = router
