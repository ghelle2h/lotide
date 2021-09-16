const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
     results.push(callback(item));
  }
  return results;
}

const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      console.log(`'${array1}' and '${array2}' are not same ❌`);
      return false; 
  } 
}
console.log(`'${array1}' and '${array2}' are the same✅`);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`The '${actual}' and the '${expected}' are the same✅`);
  } else console.assert(actual === expected, "❌");
};

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, words));
console.log(assertArraysEqual(results1, []));
console.log(assertArraysEqual(results1, [1, 3 ,4,5]))