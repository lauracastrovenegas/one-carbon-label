require('dotenv').config();

const dbUser = process.env.DBUSER
const dbName = process.env.DBNAME
const dbPassword = process.env.DBPASSWORD

const URI = `mongodb+srv://one-carbon-user:N1r8hyF4BBrJmZZG@cluster0.6sw3u.mongodb.net/one-carbon-label?retryWrites=true&w=majority`
module.exports = {
    URI: URI
}