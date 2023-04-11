const palindromes = function (string) {
  let originalString = removePunctuationFromString(string);
  let reversedString = reverseString(originalString);

  originalString = originalString.toUpperCase();
  reversedString = reversedString.toUpperCase();

  return originalString === reversedString;
};

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

console.log(palindromes('Racecar!'));