// should have html string instead of doc element
// should just have it on button instead of parent
// sense language

console.log('okay!');
console.log(countryData);
console.log(languageData);
console.log(categoryData);
var languages = ['English'];
var countries = ['United States'];
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
    , dataset: categoryData
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
  var currentCategory = t.getAttribute('data-name');
  var arr = [];

  console.log('THIS IS THE CURRENT CATEGORY: ');
  console.log(currentCategory);

  document.querySelectorAll('input[type=checkbox].' + currentCategory).forEach(el => {
    if (el.checked) arr.push(el.value);
  });
  eval(currentCategory + '= arr');
  console.log(arr);
  // evaluate selection

  var selectedArr = new Set([]);
  var dependentCategory = dependentSelectMap[currentCategory]['dependency'];

  console.log('THIS IS THE DEPENDENT CATEGORY');
  console.log(dependentCategory);
  document.querySelector('.container-finite' + '.' + dependentCategory).innerHTML = '';
    arr.forEach(function(el, idx){

      console.log('these are the resulting choices');
      if (currentCategory == 'countries'){
        var dataArr = dependentSelectMap[currentCategory]['dataset'][el];
        console.log(dataArr);
      } else {
        var dataArr = Object.keys(dependentSelectMap[currentCategory]['dataset'][el]);
        console.log(dataArr);
      }
      // selectedArr = selectedArr.concat(dataArr);
      selectedArr = Array.from( new Set([...selectedArr, ...dataArr]) );
      console.log('what is selectedArr: ');
      console.log(selectedArr);
      if (idx == arr.length - 1){
        // eval(currentCategory + '= selectedArr');
        let d = makeSection(selectedArr, dependentCategory, 'checkbox', dependentCategory);
        console.log(d);
        console.log('document.querySelector(\'.container-column#\' + dependentCategory).innerHTML = d');
        document.querySelector('.container-finite.' + dependentCategory).appendChild(d);
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
  columnDiv.className = 'container-finite ' + elId;
  // columnDiv.setAttribute('id', elId);
  for (let i = 0; i < arr.length; i++){
    var input = sectionArr.join('').replace('#REPLACETYPE', iType).replace(/#REPLACEVALUE/g, arr[i]).replace('#REPLACEID', elId);
    columnDiv.innerHTML += input;
  }
  return columnDiv;
}

// ajax call to get yelp data

window.onload = function(){
  document.querySelector('#search-button').addEventListener('click', e => {
    console.log('clicked');
  });
}
