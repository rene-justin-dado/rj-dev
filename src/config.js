const development = {
  port: process.env.FRONT_PORT,
  url: 'http://localhost:3000'
}
const production = {
  port: process.env.PORT,
  url: 'http://rj-dev.herokuapp.com'
}

module.exports = process.env.NODE_ENV == 'production' ? production : development
