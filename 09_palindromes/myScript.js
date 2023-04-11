function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

console.log(isLetter('a'));
console.log(isLetter('b'));
console.log(isLetter('c'));
console.log(isLetter('!'));
console.log(isLetter(','));
console.log(isLetter('?'));
console.log(isLetter('A'));
console.log(isLetter('B'));
console.log(isLetter('C'));
console.log(isLetter(' '));