const words = ["sun", "potato", "roundabout", "pizza"];
function getWordLengths(someWords) {
  const newArray = someWords.map(words => words.length);
  return newArray;
}
getWordLengths(words);

module.exports = getWordLengths;
