const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')// v1.0.5
const upload = multer() // for parsing multipart/form-data,upload.array()
const fs = require('fs')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))


router.post('/:typeVote',(req,res,next)=> {

})

module.exports = router