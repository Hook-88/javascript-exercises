const palindromes = function (string) {
  let originalStringArray = filterString(string);
  let reversedArray = reverseArray(originalStringArray);
return arrayToString(originalStringArray) === arrayToString(reversedArray);
};

// Do not edit below this line
module.exports = palindromes;


function filterString(string) {
  let stringArray = string.split('');
  let filteredStringArray = stringArray.filter(char => {
    return char.toUpperCase() !== char.toLowerCase();
  }).map(char => {
    return char.toUpperCase();
  })
  return filteredStringArray;
}

function reverseArray(array) {
  let newArray = [];
  for (const char of array) {
    newArray.unshift(char);
  }
  return newArray;
}

function arrayToString(array) {
  return array.join('');
}



