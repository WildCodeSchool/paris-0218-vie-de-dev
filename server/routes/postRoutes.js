const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const util = require('util')
const db = require('../db.js')
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)
const stat = util.promisify(fs.stat)

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/vote/:typeVote', (req, res, next) => {
  console.log('parametre URL POST:' + req.params.typeVote)
  const user = Number(req.body.user)
  // test si user deja present dans array Vote (yes, bad ou salty)
  db.selectVote(req.body, req.params.typeVote)
    .then(result => {
      if (result.length === 0) {
        // user non present : addVote user dans table typeVote puis countVote sur table type Vote (mise à jour)
        console.log('resultat SELECTVote : ', result)
        res.header('Content-Type', 'application/json;charset=utf-8')
        db.addVote(req.body, req.params.typeVote)
          .then(result => db.countVote(req.body, req.params.typeVote)
                            .then(result => res.end(JSON.stringify(result)) ))
          .catch(next) 
      } else {
        // user deja dans array Vote : on renvoit le resultat de la requete countVote
        res.header('Content-Type', 'application/json;charset=utf-8')
        db.countVote(req.body, req.params.typeVote)
          .then(result => res.end(JSON.stringify(result))) /*console.log("resultat countVote deja present", result)*/
      }
    })
})

// nom fichier aleatoire avec test id unique
const testId = (id) =>
  stat(getPathFromId(id))
    .then(() => testId(getNewId()))
    .catch(err => {
      if (err.code === 'ENOENT') {
        return id
      }
      throw err
    })

const getNewId = () => Math.random().toString(36).slice(2).padEnd(11, '0').slice(0, 5)
const getPathFromId = id => path.join(__dirname, '../../mocks/post/', `${id}.json`)

router.post('/soumettre', (req, res, next) => {
  db.addPost(req.body)
    .then(() => res.json('OK'))
    .catch(next)
})

module.exports = router
