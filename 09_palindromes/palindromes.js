const palindromes = function (string) {
  //create an array and set it to the filterd string
  let originalStringArray = filterString(string);
  //create an array which is the opposite of the original string array
  let reversedArray = reverseArray(originalStringArray);
  //check if original and reverse are the same
  return arrayToString(originalStringArray) === arrayToString(reversedArray);
};

// Do not edit below this line
module.exports = palindromes;


function filterString(string) {
  // spilt string in array
  return string.split('')
    // filter out al the non letter chars to deal with punctuation and multiple words
    .filter(char => {
      return char.toUpperCase() !== char.toLowerCase();
    })
    // convert to uppercase to deal with uppercase letters
    .map(char => {
    return char.toUpperCase();
    });
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



