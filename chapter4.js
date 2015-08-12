// Write a range function that takes two arguments, 
// start and end, and returns an array containing all 
// the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of 
// numbers and returns the sum of these numbers. Run 
// the previous program and see whether it does indeed 
// return 55.

function range(start, end){
  var rangeArray = [];
  for(var count = start; count <= end; count++) {
    rangeArray.push(count)
  }
  return(rangeArray);
}

function sum(array) {
  var total = 0
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(sum(range(1, 10)));
// → 55
