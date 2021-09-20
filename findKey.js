const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`The '${actual}' and the '${expected}' are the same✅`);
  } else console.assert(actual === expected, "❌");
};

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for(key in keys){
    if(callback(object[keys[key]])) {
      return keys[key];
    } 
  }
  return undefined;
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))