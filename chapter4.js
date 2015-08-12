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


// Modify your range function to take an optional third argument 
// that indicates the “step” value used to build up the array. 
// If no step is given, the array elements go up by increments 
// of one, corresponding to the old behavior.

function rangeStep(start, end, step){
  var rangeArray = [];
  if (step == null) step = 1;
  if (step > 0) {
    for (var count = start; count <= end; count += step) {
      rangeArray.push(count)
    }
  }
  else {
    for (var count = start; count >= end; count += step) {
      rangeArray.push(count)
    }
  }
  return(rangeArray);
}

console.log(sum(rangeStep(1, 10)));
// → 55
console.log(rangeStep(5, 2, -1));
// → [5, 4, 3, 2]


// Write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as argument and produces 
// a new array that has the same elements in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method 
// does: it modifies the array given as argument in order to 
// reverse its elements. Neither may use the standard reverse method.

function reverseArray(array) {
  var newArray = [];
  for (var i = array.length -1; i >= 0; i--) {
    newArray.push(array[i])
  };
  return newArray;
};

console.log(reverseArray(["A", "B", "C"]));


function reverseArrayInPlace(array) {
  var newArray = [];
  for (var i = array.length -1; i >= 0; i--) {
    newArray.push(array[i])
  };
  array = newArray;
  return array;
};

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
// → ["C", "B", "A"];

// Textbook answer - 

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}