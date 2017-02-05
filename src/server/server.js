const express = require('express')
const cfg = require('../config')
const path = require('path')
const PORT = cfg.port
const app = express()

app.use(express.static(path.resolve(__dirname, 'src', 'public')))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
