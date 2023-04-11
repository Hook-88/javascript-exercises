const fibonacci = function(number) {
  if (number === 1 || number === 2) {
    return 1;
  }
  fibonacci((number - 1)) + fibonacci((number - 2));
};