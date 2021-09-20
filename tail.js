const assertEqual = require('./assertEquals');


const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


module.exports = tail;




