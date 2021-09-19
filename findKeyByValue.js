
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`The '${actual}' and the '${expected}' are the same✅`);
  } else console.assert(actual === expected, "❌");
};

const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for(key of keys){
    if(object[key] === value){
      console.log(key)
      return key;
    }
  }
    


}



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);