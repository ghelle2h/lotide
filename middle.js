const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      return false; 
  } 
}
return true;
};

const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      console.log(`The '${array1}' and the '${array2}' are the not same ❌`);
      return false; 
  } 
}
console.log(`The '${array1}' and the '${array2}' are the same✅`);
}; 


const middle = function (array) {
  if (array.length % 2 !== 0) {
    let i = Math.floor((array.length) / 2);
    console.log("The middle child is " + array[i]);
  } else {
    array = [];
    return array;
  };
};
const numbers = [1, 2, 3, 4, 5, 6, 7];
middle(numbers);
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5])
console.log(middle([1, 2]));