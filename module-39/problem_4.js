const max = (arr1, arr2) => {
    let combinedArr = [];
    combinedArr = [...arr1, ...arr2];
    console.log(combinedArr);
    return Math.max(...combinedArr);
}
const arr1 = [1,99999,454];
const arr2 = [8,9,7777];
const maximum = max(arr1, arr2);
console.log(maximum);