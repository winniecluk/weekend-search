require('dotenv').config();
const PORT = process.env.PORT || 3000;
const YELP_KEY = process.env.YELP_KEY;

const path = require('path');
const express = require('express');
const app = express();
const request = require('request-promise');

const util = require('./util');
var yelpQuery = require('./yelp');
var yelpCountries = require('./yelp-countries');
var categoryIndex = require('./yelp-categories');

const localeCode = yelpCountries.getCountries('English', 'United States');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static( path.join(__dirname, 'public') ) );
  console.log();

app.get('/')

app.get('/', (req, res) => {
    // console.log(yelpCountries.countries)
    res.render('index', {
      title: 'Weekend-Search'
      , message: 'search'
      , languages: Object.keys(yelpCountries.countries)
      , countries: JSON.stringify(yelpCountries.countries)
      , categories: categoryIndex['yelp']
      , events: []
    });

  // yelpQuery.eventSearch(localeCode, {
  //   limit: 20
  //   , location: '"Los Angeles"'
  //   , categories: JSON.stringify(['music'])
  //   , start_date: util.dateParser('2018-02-10')
  //   , end_date: util.dateParser('2018-02-11')
  //   , sort_on: '"time_start"'
  // }).then(function(r){
  //   console.log(r);
  //   var d = JSON.parse(r);
  //   res.render('index', { title: 'Hey', message: 'Hello there!', events: d.data.event_search.events});
  // });
});

app.listen(PORT, onListening);

function onListening(req, res){
  console.log('listening');
}
