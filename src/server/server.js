const express = require('express')
const path = require('path')
// const config = require('../config')
const PORT = process.env.FRONT_PORT
const app = express()

app.use(express.static(path.resolve(__dirname, '../', 'public')))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
