const removeFromArray = function(numbersArray, ...theArgs) {
  return numbersArray.filter(
    num => {
      return !theArgs.includes(num);
    }
  )
};



// Do not edit below this line
module.exports = removeFromArray;
