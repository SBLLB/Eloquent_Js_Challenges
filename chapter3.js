
// Write a function to return the minimun of two 
// numbers that are passed to it as arguements

function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(44, 158));
// → 44
console.log(min(66, -65));
// → -65


/ Define a recursive function isEven. The function 
// should accept a number parameter and return a Boolean.

function isEven(num) {
  if (num == 0)
    return true;
  else if (num == 1)
    return false;
  else if (num < 0)
    return isEven(-num);
  else
    return isEven(num - 2);
}


console.log(isEven(82));
// → true
console.log(isEven(54));
// → true
console.log(isEven(-1));
// → false
console.log(isEven(111));
// → false



// Write a function countBs that takes a string as its only 
// argument and returns a number that indicates how many 
// uppercase “B” characters are in the string.

// Next, write a function called countChar that behaves like 
// countBs, except it takes a second argument that indicates 
// the character that is to be counted (rather than counting 
//   only uppercase “B” characters). 

// Rewrite countBs to make use of this new function.

function countBs1(string) {
  var instances = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == "B")
      instances += 1;
  return instances;
}

function countCharacters(string, char) {
  var instances = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == char)
      instances += 1;
  return instances;
}

function countBs2(string) {
  return countChar(string, "B");
}

console.log(countBs1("BBC"));
// → 2
console.log(countBs2("BBC"));
// → 2
console.log(countCharacters("bBc", "B"));
// → 1