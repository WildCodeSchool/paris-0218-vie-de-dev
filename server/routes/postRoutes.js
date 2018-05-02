const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('../db.js')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const secret = 'vdd is great'
router.use(session({
  secret,
  saveUninitialized: false,
  resave: true,
  store: new FileStore({ secret })
}))

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/vote/:typeVote', (req, res, next) => {
  console.log('parametre URL POST:' + req.params.typeVote)
  // test si user deja present dans array Vote (yes, bad ou salty)
  db.selectVote(req.body, req.params.typeVote)
    .then(result => {
      if (result.length === 0) {
        // user non present : addVote user dans table typeVote puis countVote sur table type Vote (mise à jour)
        console.log('resultat SELECTVote : ', result)
        res.header('Content-Type', 'application/json;charset=utf-8')
        db.addVote(req.body, req.params.typeVote)
          .then(result => db.countVote(req.body, req.params.typeVote)
            .then(result => res.end(JSON.stringify(result))))
          .catch(next)
      } else {
        // user deja dans array Vote : on renvoit le resultat de la requete countVote
        res.header('Content-Type', 'application/json;charset=utf-8')
        db.countVote(req.body, req.params.typeVote)
          .then(result => res.end(JSON.stringify(result)))
      }
    })
})
router.post('/soumettre', (req, res, next) => {
  db.addPost(req.body)
    .then(() => res.json('ok'))
    .catch(next)
})
module.exports = router
