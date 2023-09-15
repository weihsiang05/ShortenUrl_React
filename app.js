const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const shorterURL = require('./public/javascripts/shorter_Url')
//conect to mongoDB
const dbUrl = 'mongodb+srv://Ivan:E1234ric@cluster0.igyksnz.mongodb.net/shortUrl?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const shortUrl = require('./models/link')

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`express server is running on the http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/link')
})

app.get('/link', (req, res) => {
  res.render('index')
})

app.post('/link', (req, res) => {
  const originalLink = req.body
  let shorterLink = shorterURL.link(originalLink);
  shortUrl.create({ fullLink: originalLink.link, newLink: shorterLink })
  res.render('success', { shorterLink })
  // shortUrl.findOne({ newLink: shorterLink }).then(link => {

  //   console.log(link)
  // })
})

app.get('/:randomLetter', (req, res) => {
  const randomLetter = req.params.randomLetter
  const fixlink = "http://localhost:3000/"
  const newLink = fixlink + randomLetter

  shortUrl.findOne({ newLink: newLink }).then(link => {
    res.redirect(link.fullLink)
  })

})

