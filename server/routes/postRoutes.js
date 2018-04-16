const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/:typeVote', (req, res, next) => {
  console.log('parametre URL POST:' + req.params.typeVote)
  const user = Number(req.body.user)
  // il faut ajouter le user au tableau :typeVote
  fs.readFile(`../mocks/post/${req.body.id}.json`, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).end('post not found')
    }
    const file = JSON.parse(data)
    if (file[`${req.params.typeVote}`].includes(user)) {
      console.log('user already present ' + user)
      res.header('Content-Type', 'application/json;charset=utf-8')
      res.end(JSON.stringify(file))
    } else {
      file[`${req.params.typeVote}`].push(user)
      const data = JSON.stringify(file, null, 2)
      fs.writeFile(`../mocks/post/${req.body.id}.json`, data, () => {
        // traiter erreur?
        console.log('OK MaJ jsonPost num :' + req.body.id)
        res.header('Content-Type', 'application/json;charset=utf-8')
        res.end(data)
      })
    }
  })
})

module.exports = router
