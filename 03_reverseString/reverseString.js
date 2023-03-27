const reverseString = function(string) {
  //create an empty string reversedString
  let reversedString = '';
  //loop reversed trough the string
  for (let i = ( string.length - 1); i > -1; i--) {
    //Add string[i] to reversedString
    reversedString += string[i];
  }
  //Return reversedString
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
