console.log('okay!');
console.log(countries);
var languages = [];
var countries = [];
var categories = [];
var apis = [];

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
  var checkboxId = t.parentElement.id;
  var arr = eval(t.getAttribute('data-name'));
  document.querySelectorAll('input[type=checkbox].' + checkboxId).forEach(el => {
    el.checked ? arr.push(el.value) : continue;
  });
  console.log(arr);
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
    var input = sectionArr.join('').replace('#REPLACETYPE', iType).replace('#REPLACEVALUE', arr[i]).replace('#REPLACEID', elId);
    columnDiv.append(input);
  }
  console.log(columnDiv);
}
