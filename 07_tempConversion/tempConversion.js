const convertToCelsius = function(tempInF) {
  // (F - 32) * (5/9)
  let raw = (tempInF - 32) * (5/9); 
  return roundNumToTwoDecimals(raw) ;
};

const convertToFahrenheit = function(tempInC) {
  // C * (9/5) + 32
  let raw = (tempInC * (9/5) + 32);
  return roundNumToTwoDecimals(raw);
};

const roundNumToTwoDecimals = num => {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
