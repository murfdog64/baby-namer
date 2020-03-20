var nameBtn = document.getElementById('generator-button');
var male = document.getElementById('male');
var female = document.getElementById('female');
var lastName = document.getElementById('last-name');
var result = document.getElementById('result');

nameBtn.addEventListener('click', function(event) {
  if (lastName.value === '') {
    alert("Last Name is a required field.");
  }
  if (document.querySelector('input[name="gender"]:checked') === null) {
    alert("Please Select a gender.");
  } else {
    generateName();
  }
});

function generateName() {
  var createdName = document.createElement('h2');
  if (male.checked) {
    firstName = getRandElem(maleNames);
    middleName = getRandElem(maleNames);
  } else if (female.checked) {
    firstName = getRandElem(femaleNames);
    middleName = getRandElem(femaleNames);
  } else {
    firstName = getRandElem(allNames);
    middleName = getRandElem(allNames);
  }
  createdName.innerText = firstName + ' ' + middleName + ' ' + lastName.value;
  result.appendChild(createdName);
  result.innerHTML = createdName.outerHTML;
}

function getRandElem(arr) {
  return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}