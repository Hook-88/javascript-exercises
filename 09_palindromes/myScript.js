function removePunctuationFromString(string) {
  let stringArray = [];
  for (const letter of string) {
    if (letter.toUpperCase() !== letter.toLowerCase()) {
      stringArray.push(letter);
    }
  }
  return stringArray.join('');
}

let testWord = 'H,e:llo!';
let noPuncWord = removePunctuationFromString(testWord);

console.log(noPuncWord);