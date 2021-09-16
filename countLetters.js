const countLettters = function (sentence) {
  list = {};
  string = sentence.split(' ').join('');
  for (letter of string) {
    if(list[letter]){
      list[letter] += 1
    } else {
      list[letter] = 1;
    }
  }
  return list;
}

console.log(countLettters("Lighthouse Labs"));