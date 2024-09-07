// Please write a javascript function that takes a sting and returns true if the string is a palindrome and returns false if it is not.
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Use two pointers approach
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
}

// Example calls

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome("Was it a car or a cat I saw?")); // true
// console.log(isPalindrome("hello")); // false

/*
 1. Cleaning the string: We first remove all non-alphanumeric characters and convert the string to lowercase. This ensures that we only compare relevant characters and ignore spaces, punctuation, and case differences.
 2. Two-pointer approach: Instead of creating a reversed string or using additional data structures, we use two pointers that move towards the center from both ends of the string.
    This approach is more memory-efficient as it doesn't require additional space proportional to the input size.
 3. Early termination: The function returns false as soon as it finds a mismatch, without needing to check the entire string in cases where it's not a palindrome.
 4. Efficient looping: The while loop only runs for half the length of the string, as we're checking from both ends simultaneously.

 This implementation has a time complexity of O(n), where n is the length of the input string, as we traverse the string only once. The space complexity is O(1) if we don't consider the space used for the cleaned
 string (which is a common assumption for string problems), or O(n) if we do count the cleaned string.
*/
