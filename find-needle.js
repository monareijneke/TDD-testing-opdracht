const words2 = ["house", "train", "slide", "needle", "book"];
function findNeedle(words) {
  const needle = words.indexOf("needle");
  return needle;
}
findNeedle(words2);

module.exports = findNeedle;
