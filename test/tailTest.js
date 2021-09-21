const assert = require('chai').assert;
const tail  = require('../tail');


describe('#tail', () => {
  it('returns [dog, cat] of [fish, dog, cat]', () =>{
    assert.deepEqual(tail(['fish', 'dog', 'cat']), ['dog', 'cat']);
  })

  it('returns [1, 2] of [3, 1, 2]', () =>{
    assert.deepEqual(tail([3, 1, 2]), [1, 2]);
  })
})




// const tail = require('../tail.js');


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

