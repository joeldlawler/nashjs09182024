/* 
Write a program that does the following:
Print numbers from 1 to n (where n is a given integer).
  - For multiples of 3, print "Fizz" instead of the number.
  - For multiples of 5, print "Buzz" instead of the number.
  - For numbers which are multiples of both 3 and 5, print "FizzBuzz
*/

function fizzBuzz(n) {
  // Create an empty array
  const result = [];
  // Use the Iteration Algorithm
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

// Example calls
// console.log(fizzBuzz(8)); // (8) ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8']
// console.log(fizzBuzz(10)); // (10) ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz']
// console.log(fizzBuzz(15)); // (15) ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
// console.log(fizzBuzz(23)); // (23) ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz', 'Fizz', '22', '23']

/*
Algorithms Used

Iteration Algorithm:
The primary algorithm used is a simple iteration from 1 to n. This is implemented using a for loop, which is a fundamental control structure in programming.

Conditional Logic:
The core of the FizzBuzz algorithm lies in its conditional logic. We use if-else statements to determine what should be output for each number. This is a basic form of a decision-making algorithm.

Modulo Operation:
The modulo operation (%) is used to determine divisibility. This mathematical operation is key to the algorithm's logic.

String Concatenation:
Although not explicitly shown in the given solution, some implementations might use string concatenation to build "FizzBuzz" strings dynamically.

Data Structures Used

Array:
The solution uses an array (result) to store the output. Arrays are fundamental data structures that allow us to store multiple values in a single variable.

Strings:
Strings are used to represent the "Fizz", "Buzz", and "FizzBuzz" outputs. In JavaScript, strings are immutable sequences of characters.

Numbers:
Integer numbers are used in the loop counter and in the divisibility checks.

Optimization Considerations
While the given solution is straightforward, there are ways to optimize it:

Early Exit:
The conditions are checked in order of specificity (15, then 3, then 5). This ensures we don't do unnecessary checks.

Avoiding Repetitive Calculations:
In more complex versions of FizzBuzz, you might pre-calculate divisibility to avoid repeated modulo operations.
Time and Space Complexity

Time Complexity: O(n), where n is the input number. We perform a constant amount of work for each number from 1 to n.
Space Complexity: O(n), as we store n elements in the result array.

Alternative Approaches

Using a Map:
You could use a Map data structure to store divisor-word pairs, allowing for easy extension of the game (e.g., adding "Bazz" for multiples of 7).

Functional Approach:
You could use functional programming concepts like map and reduce to solve this problem, which might be more declarative.

Bitwise Operations:
For very large numbers, using bitwise operations to check divisibility can be more efficient than the modulo operator.
*/
