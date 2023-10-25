function reverse(sentence) {
  let newSentence = "";
  let tempWord = "";
  
  for (let j = 0; j < sentence.length; j++) {
    const char = sentence[j];
    if (char === " ") {
      newSentence = newSentence  + tempWord + " ";
      tempWord = "";
    } else {
      tempWord = char + tempWord;
      if (j == sentence.length - 1) {
        newSentence = newSentence  + tempWord + " ";
      }
    }
  }
  return newSentence;
}

const sentence = "This is a sunny day";
const reversedSentence = reverse(sentence);
console.log(reversedSentence);      // sihT si a ynnus yad 
