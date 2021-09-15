const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length){
    console.log(`The '${array1}' and the '${array2}' are the not same ❌`);
    return false; 
  }
  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      console.log(`The '${array1}' array and the '${array2}' array are not the same ❌`);
      return false; 
  } 
}
console.log(`The '${array1}' and the '${array2}' are the same✅`);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`The '${actual}' and the '${expected}' are the same✅`);
  } else console.assert(actual === expected, "❌");
};

const eqArrays = function (array1, array2) {


  for (let i = 0; i < array1.length; i++ ) {
    if (array1[i] !== array2[i]) {
      return false; 
  } 
}
return true;
};

const without = function (sourceArray, itemsToRemove) {
  for( let j = 0; j < itemsToRemove.length; j++){
    for (let i = 0; i < sourceArray.length; i++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        sourceArray.splice(i, 1);
        console.log(sourceArray);
      }
    }
  }
  };

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
