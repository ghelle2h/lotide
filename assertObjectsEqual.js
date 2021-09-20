const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if(keys1.length = keys2.length){
    for(key of keys1){
      
      if(Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if(object1[key].length === object2[key].length){
          eq(object1[key], object2[key]);
        } else {
          return false;
      } 
        
      } else{
        if(object1[key] === object2[key]){
      } else return false;
      }  
  }
  } else return false;
  return true;
}

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    
    console.log(`The '${object1}' and the '${object2}' are the same✅`);
    return true;
  } 
console.log(`The '${object1}' and the '${object2}' are not same ❌`);
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);