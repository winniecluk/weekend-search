console.log('okay!');
console.log(countryData);
console.log(languageData);
var languages = [];
var countries = [];
var categories = [];
var apis = [];
var container = document.querySelector('div.container');

var dependentSelectMap = {
  languages: {
    dependency: 'countries'
    , dataset: languageData
  }
  , countries: {
    dependency: 'apis'
    , dataset: countryData
  }
  , apis: {
    dependency: 'categories'
    , dataset: null
  }
};

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
  var label = t.getAttribute('data-name');
  var checkboxId = t.parentElement.id;
  var arr = [];
  document.querySelectorAll('input[type=checkbox].' + checkboxId).forEach(el => {
    if (el.checked) arr.push(el.value);
  });
  eval(label + '= arr');
  // evaluate selection

  var selectedArr = new Set([]);
  var dependentField = dependentSelectMap[label]['dependency'];
  document.querySelector('.container-finite' + '.' + dependentField).innerHTML = '';
    arr.forEach(function(el, idx){

      if (label == 'countries'){
        var dataArr = dependentSelectMap[label]['dataset'][el];
      } else {
        var dataArr = Object.keys(dependentSelectMap[label]['dataset'][el]);
      }
      // selectedArr = selectedArr.concat(dataArr);
      selectedArr = Array.from( new Set([...selectedArr, ...dataArr]) );
      if (idx == arr.length - 1){
        eval(label + '= selectedArr');
        let d = makeSection(selectedArr, label, 'checkbox', label);
        document.querySelector('.container-finite.' + dependentField).appendChild(d);
        // document.querySelector('div#countries').appendChild(d);
      }
    });
}


var sectionArr = [
  '<input type="#REPLACETYPE" value="#REPLACEVALUE" class="#REPLACEID" />'
  , '<span class="checkbox">'
  , '#REPLACEVALUE'
  , '</span>'
  , '<br />'
];
function makeSection(arr, elId, iType, varName){
  var columnDiv = document.createElement('div');
  columnDiv.setAttribute('id', elId);
  // columnDiv.classList.add('container-column');
  for (let i = 0; i < arr.length; i++){
    var input = sectionArr.join('').replace('#REPLACETYPE', iType).replace(/#REPLACEVALUE/g, arr[i]).replace('#REPLACEID', elId);
    columnDiv.innerHTML += input;
  }
  return columnDiv;
}

window.onload = function(){
  document.querySelector('#search-button').addEventListener('click', e => {
    console.log('clicked');
  });
}
