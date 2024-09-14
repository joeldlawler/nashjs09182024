/*
Write a function to flatten a nested array of arbitrary depth
*/

function flattenArray(arr) {
  return arr.reduce((flattened, item) => {
    if (Array.isArray(item)) {
      return flattened.concat(flattenArray(item));
    } else {
      return flattened.concat(item);
    }
  }, []);
}

// Example Usage

// const nestedArray = [1, [2, [3, 4]], [5, 6]];
// console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]

// const deeplyNested = [1, [2, [3, [4, [5]]]]];
// console.log(flattenArray(deeplyNested)); // [1, 2, 3, 4, 5]

/*

1. The function uses the reduce method to iterate over each element of the input array.
2. For each element, it checks if it's an array using Array.isArray().
3. If the element is an array, it recursively calls flattenArray on that element and concatenates the result to the flattened array.
4. If the element is not an array, it's directly concatenated to the flattened array.
5. The process continues until all nested arrays are flattened.

# Time Complexity Analysis

The time complexity of this function can be described as O(n), where n is the total number of elements in the array, including all nested elements. Here's why:
In the worst case, where every element is nested in its own array (e.g., [[], [], []]), the function will need to make n recursive calls.

Each recursive call involves a constant-time operation (checking if it's an array and concatenating).

The reduce method itself iterates over each element once.

However, it's worth noting that the repeated use of concat can lead to additional overhead, as it creates a new array each time. In practice, this might make the function perform slower than a linear time algorithm for very large or deeply nested arrays.

# Space Complexity
The space complexity is also O(n), as in the worst case, we'll need to store all n elements in the final flattened array.

*/
