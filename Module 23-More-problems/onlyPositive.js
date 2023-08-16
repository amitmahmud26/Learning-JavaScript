// if a negative number is found in an array, previous array values will be returned
function onlyPositive(arr){
    let array = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= 0){
            array.push(arr[i]);
        }
        else break;
    }
    return array;
}
const arr = [1, 88, 73, 5, -9, 89, 0, -6];
let result = onlyPositive(arr);
console.log(result);