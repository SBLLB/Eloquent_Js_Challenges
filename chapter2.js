// Write a loop that makes 7 calls to console.log to output the following

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (var line = "#"; line.length < 8; line += "#") {
	console.log(line;)
};

// Write a program that uses console.log to print all the numbers from 1 to 
// 100, with two exceptions. For numbers divisible by 3, print "Fizz" 
// instead of the number, and for numbers divisible by 5 (and not 3), print 
// "Buzz" instead.

for (var number = 1; number <= 100; number++) { 
	if (number % 15 == 0)
  	console.log("FizzBuzz");
	else if (number % 3 == 0)
  	console.log("Fizz");
	else if (n % 5 == 0)
  	console.log("Buzz");
	else console.log(number);
};

// Or slightly different

for (var number = 1; number <= 100; number++) {
  var printOut = "";
  if (number % 15 == 0)
  	printOut += "FizzBuzz";
  else if (number % 3 == 0)
    printOut += "Fizz";
  else if (nnumber % 5 == 0)
    printOut += "Buzz";
  console.log(printOut || n);
};


// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the 
// grid there is either a space or a “#” character. The characters 
// should form a chess board.

var gridSize = 8; grid = "";

for (var line = 0; line < gridSize; line++) {
  for (var block = 0; block < gridSize; block++) {
    if ((line + block) % 2 == 0)
      grid += " ";
    else
      grid += "#";
  }
  grid += "\n";
};
console.log(grid);