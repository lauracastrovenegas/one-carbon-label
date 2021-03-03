const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const dbUser = process.env.DBUSER
const dbName = process.env.DBNAME
const dbPassword = process.env.DBPASSWORD

const URI = `mongodb+srv://${dbUser}:${dbPassword}@one-carbon-label.zrudq.mongodb.net/${dbName}?retryWrites=true&w=majority`
//const URI = `mongodb+srv://one-carbon-label-user:jGBZGLBbfjLKfCNY@one-carbon-label.zrudq.mongodb.net/one-carbon-label?retryWrites=true&w=majority`
module.exports = {
    URI: URI
}

const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});