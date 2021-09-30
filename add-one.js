const myArray = [31, 57, 12, 5];

function addOne(numbers) {
  const map = numbers.map(num => num + 1);
  return map;
}

addOne(myArray);

module.exports = addOne;
