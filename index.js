const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const PORT = 3002

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/signin', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  console.info(username)
  console.info(password)

  res.sendStatus(200)
})

app.post('/signup', (req, res) => {
  const username = req.body.username
  const password = req.body.password

  console.info(username)
  console.info(password)

  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})