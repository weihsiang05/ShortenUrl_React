const express = require('express')
const router = express.Router()

const {
  createUrl, findUrl
} = require('../controllers/linkController')


router.get('/', (req, res) => {
  res.json({ mssg: 'Test!!' })
})

router.post('/', createUrl)

router.post('/findRandomLetter', findUrl)
module.exports = router