const sumAll = function(firstNum, lastNum) {
  let allNums;
  if (firstNum < 0 || lastNum < 0) {
    return 'ERROR';
  } else {
    if (typeof firstNum !== 'number' || typeof lastNum !== 'number') {
      return 'ERROR';
    } else {
      if (firstNum < lastNum) {
        allNums = createArrayFromNumbersSmallToLarge(firstNum, lastNum);
      } else {
        allNums = createArrayFromNumbersSmallToLarge(lastNum, firstNum);
      }
      //reduce total + num
      return allNums.reduce((acc, curr) => {
        return acc + curr;
      },0);
    }
  }

  
};

const createArrayFromNumbersSmallToLarge = (small, large) => {
  const allNums = [];
  for (let i = small; i <= large; i++) {
    allNums.push(i);
  }
  return allNums;
}

// Do not edit below this line
module.exports = sumAll;
