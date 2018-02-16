const countries = {
  "Czech": {
    "Czech Republic": {
      "languageCode": "cs_CZ"
      , "apis": ["yelp"]
    }
  }
  , "Danish": {
    "Denmark": {
      "languageCode": "da_DK"
      , "apis": ["yelp"]
    }
  }
  , "German": {
    "Austria":{
      "languageCode": "de_AT"
      , "apis": ["yelp"]
    }
    , "Switzerland":{
      "languageCode": "de_CH"
      , "apis": ["yelp"]
    }
    , "Germany":{
      "languageCode": "de_DE"
      , "apis": ["yelp"]
    }
  }
  , "English": {
      "Australia":{
        "languageCode": "en_AU"
        , "apis": ["yelp"]
      }
      , "Belgium":{
        "languageCode": "en_BE"
        , "apis": ["yelp"]
      }
      , "Canada":{
        "languageCode": "en_CA"
        , "apis": ["yelp"]
      }
      , "Switzerland":{
        "languageCode": "en_CH"
        , "apis": ["yelp"]
      }
      , "United Kingdom":{
        "languageCode": "en_GB"
        , "apis": ["yelp"]
      }
      , "Hong Kong":{
        "languageCode": "en_HK"
        , "apis": ["yelp"]
      }
      , "Republic of Ireland":{
        "languageCode": "en_IE"
        , "apis": ["yelp"]
      }
      , "Ireland":{
        "languageCode": "en_IE"
        , "apis": ["yelp"]
      }
      , "Malaysia":{
        "languageCode": "en_MY"
        , "apis": ["yelp"]
      }
      , "New Zealand":{
        "languageCode": "en_NZ"
        , "apis": ["yelp"]
      }
      , "Philippines":{
        "languageCode": "en_PH"
        , "apis": ["yelp"]
      }
      , "Singapore":{
        "languageCode": "en_SG"
        , "apis": ["yelp"]
      }
      , "United States":{
        "languageCode": "en_US"
        , "apis": ["yelp"]
      }
      , "US":{
        "languageCode": "en_US"
        , "apis": ["yelp"]
      }
      , "America":{
        "languageCode": "en_US"
        , "apis": ["yelp"]
      }
  }
  , "Spanish": {
    "Argentina":{
      "languageCode": "es_AR"
      , "apis": ["yelp"]
    }
    , "Chile":{
      "languageCode": "es_CL"
      , "apis": ["yelp"]
    }
    , "Spain":{
      "languageCode": "es_ES"
      , "apis": ["yelp"]
    }
    , "Mexico":{
      "languageCode": "es_MX"
      , "apis": ["yelp"]
    }
  }
  , "Finnish": {
    "Finland":{
      "languageCode": "fi_FI"
      , "apis": ["yelp"]
    }
  }
  , "Filipino": {
    "Philippines":{
      "languageCode": "fil_PH"
      , "apis": ["yelp"]
    }
  }
  , "French": {
    "Belgium":{
      "languageCode": "fr_BE"
      , "apis": ["yelp"]
    }
    , "Canada":{
      "languageCode": "fr_CA"
      , "apis": ["yelp"]
    }
    , "Switzerland":{
      "languageCode": "fr_CH"
      , "apis": ["yelp"]
    }
    , "France":{
      "languageCode": "fr_FR"
      , "apis": ["yelp"]
    }
  }
  , "Italian": {
    "Switzerland":{
      "languageCode": "it_CH"
      , "apis": ["yelp"]
    }
    , "Italy":{
      "languageCode": "it_IT"
      , "apis": ["yelp"]
    }
  }
  , "Japanese": {
    "Japan":{
      "languageCode": "ja_JP"
      , "apis": ["yelp"]
    }
  }
  , "Malay": {
    "Malaysia":{
      "languageCode": "ms_MY"
      , "apis": ["yelp"]
    }
  }
  , "Norwegian": {
    "Norway":{
      "languageCode": "nb_NO"
      , "apis": ["yelp"]
    }
  }
  , "Dutch": {
    "Belgium":{
      "languageCode": "nl_BE"
      , "apis": ["yelp"]
    }
    , "The Netherlands":{
      "languageCode": "nl_NL"
      , "apis": ["yelp"]
    }
  }
  , "Polish": {
    "Poland":{
      "languageCode": "pl_PL"
      , "apis": ["yelp"]
    }
  }
  , "Portuguese": {
    "Brazil":{
      "languageCode": "pt_BR"
      , "apis": ["yelp"]
    }
    , "Portugal":{
      "languageCode": "pt_PT"
      , "apis": ["yelp"]
    }
  }
  , "Swedish": {
    "Finland":{
      "languageCode": "sv_FI"
      , "apis": ["yelp"]
    }
    , "Sweden":{
      "languageCode": "sv_SE"
      , "apis": ["yelp"]
    }
  }
  , "Turkish": {
    "Turkey":{
      "languageCode": "tr_TR"
      , "apis": ["yelp"]
    }
  }
  , "Chinese": {
    "Hong Kong":{
      "languageCode": "zh_HK"
      , "apis": ["yelp"]
    }
    , "Taiwan":{
      "languageCode": "zh_TW"
      , "apis": ["yelp"]
    }
  }
}

function getCountries(language = 'English', country){
  if (country) return countries[language][country]["languageCode"];
  return countries[language];
}

module.exports = {
  getCountries,
  countries
};
