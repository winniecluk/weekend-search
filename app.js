require('dotenv').config();
const PORT = process.env.PORT || 3000;
const YELP_KEY = process.env.YELP_KEY;

const path = require('path');
const express = require('express');
const app = express();
const request = require('request-promise');

const util = require('./util');
var yelpQuery = require('./yelp');
var countryIndex = require('./countries').byCountries;
var languageIndex = require('./countries').byLanguages;
var categoryIndex = require('./categories');

const localeCode = languageIndex['English']['United States'];

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static( path.join(__dirname, 'public') ) );

app.get('/', (req, res) => {
    // console.log(yelpCountries.countries)
    res.render('index', {
      title: 'Weekend-Search'
      , message: 'search'
      , countryData: JSON.stringify(countryIndex)
      , languageData: JSON.stringify(languageIndex)
      , categoryData: JSON.stringify(categoryIndex)
      , languages: Object.keys(languageIndex)
      , countries: Object.keys(languageIndex.English)
      , apis: countryIndex['United States']
      , categories: Object.keys(categoryIndex['yelp'])
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

app.post('/search', (req, res) => {

});

app.listen(PORT, onListening);

function onListening(req, res){
  console.log('listening');
}
