const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + './../public'))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})