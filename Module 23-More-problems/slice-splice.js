// Using slice() to create a new array from a portion of an existing array
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4); // Extract elements from index 1 to 3 (not inclusive)
console.log("Sliced Array:", slicedArray); // Output: [2, 3, 4]

// Using splice() to modify an array by adding/removing elements
const numbers = [10, 20, 30, 40, 50];
// Remove elements starting from index 2 and remove 2 elements
const removedElements = numbers.splice(2, 2);
console.log("Removed Elements:", removedElements); // Output: [30, 40]
console.log("Modified Numbers Array:", numbers); // Output: [10, 20, 50]

// Adding elements using splice
const animals = ["cat", "dog", "elephant"];
// Add elements starting from index 1, remove 0 elements, and insert "lion" and "tiger"
animals.splice(1, 0, "lion", "tiger");
console.log("Modified Animals Array:", animals); // Output: ["cat", "lion", "tiger", "dog", "elephant"]
