const express = require('express')
const app = express()
const port = 3000

var todaysDish = null;
var price = "";

var osmosis = require('osmosis');
osmosis
.get('https://www.sio.no/mat-og-drikke/_window/mat+og+drikke+-+dagens+middag?s=284&_=1639827212459')
.find('p')
.set('body')
.data(function(listing) {
    console.log(listing)
    if(todaysDish == null){
      todaysDish = listing;
    } else{
      price = listing;
    }
})
.log(console.log)
.error(console.log)

app.get('/', (req, res) => {
  if(todaysDish){
    res.json({todaysDish: todaysDish, price: price})
  }else{
    res.send("Error fetching data")
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})