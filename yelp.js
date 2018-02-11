require('dotenv').config();
const request = require('request-promise');
const YELP_KEY = process.env.YELP_KEY;

var options = {
  method: 'POST'
  , url: 'https://api.yelp.com/v3/graphql'
  , headers: {
    'Authorization': 'Bearer ' + YELP_KEY
    , 'Content-Type': 'application/graphql'
  }
}

function getQueryString(configObj){
  var qs = '';
  for (var key in configObj){
    qs += `${key}: ${configObj[key]}, `;
  }
  qs = qs.slice(0, -2);
  return qs;
}

var eventSearch = function(countryCode, configObj){
  console.log('searching...');
  options['headers']['Accept-Language'] = countryCode;
  var qs = getQueryString(configObj);
  options['body'] = `{\
    event_search(${qs}){\
      total\
      events {\
        name\
        time_start\
        description\
        cost\
        cost_max\
      }\
    }\
  }`;
  // console.log(options);

  return request(options, function(err, response, body){
    if (!err && response.statusCode == 200) {
      return body;
    }
    return null;
  });
}

module.exports = {
  eventSearch
}
