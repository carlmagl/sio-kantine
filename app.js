const express = require('express')
const app = express()
const axios = require("axios");
const port = process.env.PORT || 3000
const URL = 'https://www.sio.no/mat-og-drikke/_window/mat+og+drikke+-+dagens+middag?s=284&_=1639827212459'
var cors = require('cors')

var corsOptions = {
  origin: 'http://ifirom.no',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/food', (err, client) => {
//   if (err) throw err

//   const db = client.db('food')

//   db.collection('food').find().toArray((err, result) => {
//     if (err) throw err
//     console.log(result)
//   })
// })



app.get('/', async ( res) => {
  const { data } = await axios.get(URL);
  console.log(data)
  res.send(data)
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})