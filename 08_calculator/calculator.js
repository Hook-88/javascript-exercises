const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numberArr) {
	return numberArr.reduce( (a, b) => {
    return a + b;
  }, 0);
};

const multiply = function(numberArr) {
  return numberArr.reduce(function(a, b) {
    return a * b;
  }, 1)
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
