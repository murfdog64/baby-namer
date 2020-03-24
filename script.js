var nameBtn = document.getElementById('generator-button');
var male = document.getElementById('male');
var female = document.getElementById('female');
var lastName = document.getElementById('last-name');
var result = document.getElementById('result');
var genderChoices = document.getElementById('gender-selectors');

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

genderChoices.addEventListener('change', function(event) {
  if (male.checked) {
    document.body.style.backgroundColor = 'lightskyblue';
  } else if (female.checked) {
    document.body.style.backgroundColor = 'lightpink';    
  } else {
    document.body.style.backgroundColor = 'lightgreen';  
  }
});

function generateName() {
  var createdName = document.createElement('h2');
  var gender = getGender();
  var names = getAppropriateNames(gender);
  firstName = getRandElem(names);
  middleName = getRandFilteredElem(names, firstName);
  createdName.innerText = firstName + ' ' + middleName + ' ' + lastName.value;
  result.appendChild(createdName);
  result.innerHTML = createdName.outerHTML;
}

function getAppropriateNames(gender) {
  if (gender === 'male') {
    return maleNames;
  } else if (gender === 'female') {
    return femaleNames;
  } else {
    return allNames;
  }
}

function getGender() {
  if (male.checked) {
    return 'male';
  } else if (female.checked) {
    return 'female';
  } else {
    return 'other';
  }
}
