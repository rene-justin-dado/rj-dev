const development = {
  port: 5000,
  url: 'http://localhost:3000'
}
const production = { url: process.env.PORT }

module.exports = process.env.NODE_ENV === 'production' ? production : development
