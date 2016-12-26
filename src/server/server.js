const express = require('express')
const cfg = require('../config')
const PORT = cfg.port
const app = express()

app.use(express.static(__dirname + './../public'))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
