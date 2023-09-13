const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const port = 3000
const shorterURL = require('./public/javascripts/shorter_Url')

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
  res.render('success', { shorterLink })
})

app.listen(port, () => {
  console.log(`express server is running on the http://localhost:${port}`)
})