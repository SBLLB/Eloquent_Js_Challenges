
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
