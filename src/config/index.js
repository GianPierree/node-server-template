require('dotenv').config()

module.exports = {
    ENV: process.env.ENV || 'dev',
    PORT: process.env.PORT || 8080,
    B24_HOOK: process.env.B24_HOOK || 'https://www.test.com'
}