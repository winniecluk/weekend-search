const countries = {
  "Czech": {
    "Czech Republic": "cs_CZ"
  }
  , "Danish": {
    "Denmark": "da_DK"
  }
  , "German": {
    "Austria": "de_AT"
    , "Switzerland": "de_CH"
    , "Germany": "de_DE"
  }
  , "English": {
    "Australia": "en_AU"
    , "Belgium": "en_BE"
    , "Canada": "en_CA"
    , "Switzerland": "en_CH"
    , "United Kingdom": "en_GB"
    , "Hong Kong": "en_HK"
    , "Republic of Ireland": "en_IE"
    , "Ireland": "en_IE"
    , "Malaysia": "en_MY"
    , "New Zealand": "en_NZ"
    , "Philippines": "en_PH"
    , "Singapore": "en_SG"
    , "United States": "en_US"
    , "US": "en_US"
    , "America": "en_US"
  }
  , "Spanish": {
    "Argentina": "es_AR"
    , "Chile": "es_CL"
    , "Spain": "es_ES"
    , "Mexico": "es_MX"
  }
  , "Finnish": {
    "Finland": "fi_FI"
  }
  , "Filipino": {
    "Philippines": "fil_PH"
  }
  , "French": {
    "Belgium": "fr_BE"
    , "Canada": "fr_CA"
    , "Switzerland": "fr_CH"
    , "France": "fr_FR"
  }
  , "Italian": {
    "Switzerland": "it_CH"
    , "Italy": "it_IT"
  }
  , "Japanese": {
    "Japan": "ja_JP"
  }
  , "Malay": {
    "Malaysia": "ms_MY"
  }
  , "Norwegian": {
    "Norway": "nb_NO"
  }
  , "Dutch": {
    "Belgium": "nl_BE"
    , "The Netherlands": "nl_NL"
  }
  , "Polish": {
    "Poland": "pl_PL"
  }
  , "Portuguese": {
    "Brazil": "pt_BR"
    , "Portugal": "pt_PT"
  }
  , "Swedish": {
    "Finland": "sv_FI"
    , "Sweden": "sv_SE"
  }
  , "Turkish": {
    "Turkey": "tr_TR"
  }
  , "Chinese": {
    "Hong Kong": "zh_HK"
    , "Taiwan": "zh_TW"
  }
}

function getCountries(language = 'English', country){
  if (country) return countries[language][country];
  return countries[language];
}

module.exports = {
  getCountries,
  countries
};
