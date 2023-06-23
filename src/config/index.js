require('dotenv').config()

module.exports = {
    ENV: process.env.ENV || 'dev',
    PORT: process.env.PORT || 8080,
}