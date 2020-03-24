function getRandFilteredElem(arr,filter, maxTries){
  maxTries = maxTries || 100;
  var randEl = getRandElem(arr);
  for (var i = 0; i < maxTries && randEl === filter; i++) {
    randEl = getRandElem(arr);
  }
  if (randEl === filter) {
    throw 'Could not find valid element';
  }
  return randEl;
}

function getRandElem(arr) {
  return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}