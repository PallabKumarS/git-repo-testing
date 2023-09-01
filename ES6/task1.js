// first task
multiply = (a, b, c) => {
  return [a * 2, b * 2, c * 2];
};
console.log(multiply(2, 3, 4));

// second task
console.log(`I am a web developer.
I love to code.
I love to eat biryani.`);

// third task
add = (a, b = 20) => a + b;
console.log(add(6));

// fourth task
const newArray = (array) => {
  let arr = [];
  for (const string of array) {
    if (string.length % 2 == 0) {
      arr.push(string);
    }
  }
  return arr;
};
console.log(newArray(["g", "grr", "gr", "grrr"]));

// fifth task
const squareElement = (array) => {
  let sum = 0;
  for (const string of array) {
    const square = string * string;
    sum += square;
  }
  return sum / array.length;
};
console.log(squareElement([1, 3, 5, 6]));

// sixth task
const maxFromArray = (array1, array2) => {
  const combinedArray = [...array1, ...array2];
  const maxNum = Math.max(...combinedArray);
  return maxNum;
};
console.log(maxFromArray([1, 3, 3], [3, 8, 9]));
