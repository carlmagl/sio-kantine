const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/food', (err, client) => {
//   if (err) throw err

//   const db = client.db('food')

//   db.collection('food').find().toArray((err, result) => {
//     if (err) throw err
//     console.log(result)
//   })
// })

const URL = 'https://www.sio.no/mat-og-drikke/_window/mat+og+drikke+-+dagens+middag?s=284&_=1639827212459'
const axios = require("axios");

app.get('/', async (req, res) => {
  const { data } = await axios.get(URL);
  console.log(data)
  res.send(data)
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})