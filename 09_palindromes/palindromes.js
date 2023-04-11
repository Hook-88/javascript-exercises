const palindromes = function (string) {
  let originalString = removePunctuationFromString(string);
  let reversedString = reverseString(originalString);
  return originalString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

function reverseString(string) {
  // create array
  let stringArray = [];
  //loop through string
  for (const letter of string) {
    //add letter to beginning of array
    stringArray.unshift(letter);
  }
  //return array to string
  return stringArray.join('');
}

function removePunctuationFromString(string) {
  let stringArray = [];
  for (const letter of string) {
    if (letter.toUpperCase() !== letter.toLowerCase()) {
      stringArray.push(letter);
    }
  }
  return stringArray.join('');
}

