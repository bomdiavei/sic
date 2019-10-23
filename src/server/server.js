const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000
const db = require('../database/database').mongoURI

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('MongoDB is connected!')).catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(cors({
  origin: '*'
}))

app.post('/', (req, res) => {
  const { name } = req.body
  res.json({
    name
  })
})

app.listen(port, (err) => { console.log("Server on port " + port) })

module.exports = app