require('dotenv').config()

const express = require('express')
const linkRoutes = require('./routers/link')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use('/link', linkRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connect to db, express server is running on the http://localhost:${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

