// getting only odd numbers from an array
function oddNums(num){
    var newArr = [];
    for(var i=0; i<num.length; i++){
        if(num[i] % 2 != 0){
            newArr.push(num[i]);
        }
    }
    return newArr;
}
var nums = [1,2,3,4,5,6,7,8,9,10];

var newArr = oddNums(nums);
console.log("Only odd numbers:",newArr);

