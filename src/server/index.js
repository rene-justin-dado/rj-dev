const express = require('express')

const PORT = 5000 || process.env.PORT
const app = express()

app.use(express.static(__dirname + './../public'))

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
