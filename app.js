const express = require('express')
const app = express()
const port = process.env.PORT || 3000


const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/food', (err, client) => {
//   if (err) throw err

//   const db = client.db('food')

//   db.collection('food').find().toArray((err, result) => {
//     if (err) throw err
//     console.log(result)
//   })
// })

var corsOptions = {
  origin: 'http://ifirom.no',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const URL = 'https://sio-prod.herokuapp.com/'
const axios = require("axios");
app.use(cors(corsOptions))
app.get('/', async (req, res) => {
  const { data } = await axios.get(URL);
  console.log(data)
  res.send(data)
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})