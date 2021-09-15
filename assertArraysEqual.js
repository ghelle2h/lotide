const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      console.log(`The '${array1}' and the '${array2}' are the not same ❌`);
      return false; 
  } 
}
console.log(`The '${array1}' and the '${array2}' are the same✅`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);