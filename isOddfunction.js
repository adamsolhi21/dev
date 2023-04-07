// 1 - skipping even numbers

var sum = 0;
for (var i = 0; i < 11; i++) {
  // Add a condition so that it will skip
  // all even numbers
  // sum will become 25
  if (i%2 === 0) {
    continue;
  }
  sum += i;
}


// 2 - feeding even and odd numbers - Model solution

var isOdd = function (number) {
  return number % 2 === 1;
}
console.log(isOdd(11));
// -> true
console.log(isOdd(12));
// -> false



// My solution

var isOdd = function(x) {
  if (x % 2 > 0) {
    return true;
  } else return false;
}

console.log(isOdd(11));
// -> true
console.log(isOdd(12));
// -> false
di