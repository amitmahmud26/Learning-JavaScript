// sum of odd numbers in an arrya
function oddSum(num){
    // console.log("Sum of odd numbers:",arr);
    // var array = arr;
    let sum = 0;
    for(var i=0; i<num.length; i++){
        if(num[i] % 2 != 0){
            sum = sum + num[i];
        }
        else
            continue;
    }
    return sum;
}
var nums = [1,2,3,4,5,6,7,8,9,10];

var sum = oddSum(nums);
console.log("Sum of odd numbers:",sum);

