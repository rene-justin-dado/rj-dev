const development = {
  port: 5000,
  env: global.process.env.NODE_ENV || 'development'
}
const production = {
  port: process.env.PORT,
  env: global.process.env.NODE_ENV || 'production'
}

module.exports = global.process.env.NODE_ENV === 'production' ? production : development
