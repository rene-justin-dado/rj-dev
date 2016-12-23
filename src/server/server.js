const express = require('express')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(__dirname + './../public'))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
