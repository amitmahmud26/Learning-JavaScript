const array = [1,2,3,4,5];
console.log(typeof(array)); // it is array but showing its string

console.log(Array.isArray(array)); // its the way finding is it an array or not

// concatination

const newArray = [3, 5, 6, 7];
const totalArray = newArray.concat(array);
console.log(totalArray);