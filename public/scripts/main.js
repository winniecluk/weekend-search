console.log('okay!');
console.log(countryData);
var languages = [];
var countries = [];
var categories = [];
var apis = [];
var container = document.querySelector('div.container');

var states = {
  checked: {
    checkboxValue: false
    , dataValue: 'unchecked'
    , textValue: 'Check All'
  }
  , unchecked: {
    checkboxValue: true
    , dataValue: 'checked'
    , textValue: 'Uncheck All'
  }
}

function checkAll(t){
  var k = t.getAttribute('data-state');
  var checkboxId = t.parentElement.id;
  document.querySelectorAll('input[type=checkbox].' + checkboxId).forEach(el => {
    el.checked = states[k]['checkboxValue'];
  });
  t.textContent = states[k]['textValue'];
  t.setAttribute('data-state', states[k]['dataValue']);
}

function selectChoice(t){
  console.log('clicky');
  var label = t.getAttribute('data-name');
  var checkboxId = t.parentElement.id;
  var arr = [];
  document.querySelectorAll('input[type=checkbox].' + checkboxId).forEach(el => {
    if (el.checked) arr.push(el.value);
  });
  eval(label + '= arr');

  // evaluate selection

  if (label == 'languages'){
    let selectedCountries = [];
    arr.forEach(function(el, idx){
      var countriesArr = Object.keys(countryData[el]);
      selectedCountries = selectedCountries.concat(countriesArr);
      if (idx == arr.length - 1){
        countries = selectedCountries;
        let d = makeSection(countries, 'countries', 'checkbox', 'countries');
        document.querySelector('div.container').appendChild(d);
      }
    })

  }
}


var sectionArr = [
  '<input type="#REPLACETYPE" value="#REPLACEVALUE" class="#REPLACEID" />'
  , '<span>'
  , '#REPLACEVALUE'
  , '</span>'
];
function makeSection(arr, elId, iType, varName){
  var columnDiv = document.createElement('div');
  columnDiv.setAttribute('id', elId);
  for (let i = 0; i < arr.length; i++){
    var input = sectionArr.join('').replace('#REPLACETYPE', iType).replace(/#REPLACEVALUE/g, arr[i]).replace('#REPLACEID', elId);
    console.log(input);
    columnDiv.innerHTML += input;
  }
  return columnDiv;
}
