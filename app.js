const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('express link for shoterURL')
})

app.listen(port, () => {
  console.log(`express server is running on the http://localhost:${port}`)
})