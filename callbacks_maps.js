var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, func) {

var newArr = []

  arr.forEach(function (element) {
    newArr.push(func(element))
  
})

console.log(newArr)

}


map(words, function(word) {
  return word.length;
});



map(words, function(word) {
  return word.toUpperCase();
});



map(words, function(word) {
  return word.split('').reverse().join('');
});



