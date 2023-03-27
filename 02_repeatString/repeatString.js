const repeatString = function(string, numOfRepeats) {
  let newString = '';
  // check if numOfRepeats is negativ
  if (numOfRepeats >= 0) {
    for (let i = 0; i < numOfRepeats; i++) {
      newString += string;
    }
    return newString;
  } else {
    return 'ERROR';
  }  
};



// Do not edit below this line
module.exports = repeatString;
