require('dotenv').config();
const PORT = process.env.PORT || 3000;

const path = require('path');
const express = require('express');
const app = express();

const request = require('request-promise');
const YELP_KEY = process.env.YELP_KEY;
var date = Date.now() / 1000;

var yelpQuery = require('./yelp');
var yelpCountries = require('./yelp-countries');

const localeCode = yelpCountries.getCountryCode('English', 'United States');


app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static( path.join(__dirname, 'public') ) );

app.get('/', (req, res) => {
  var endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);
  endDate = (Math.floor (endDate.getTime() / 1000) ).toString();

  yelpQuery.eventSearch(localeCode, {
    limit: 20
    , location: '"Los Angeles"'
    , categories: JSON.stringify(['music'])
    , start_date: (Math.floor(Date.now() / 1000)).toString()
    , end_date: endDate
    , sort_on: '"time_start"'
  }).then(function(r){
    console.log(r);
    var d = JSON.parse(r);
    res.render('index', { title: 'Hey', message: 'Hello there!', events: d.data.event_search.events});
  });
});

app.listen(PORT, onListening);

function onListening(req, res){
  console.log('listening');
}
