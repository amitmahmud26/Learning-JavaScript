// finding average with function which take an array ar parameter
function make_avg(arr, len){
    var sum = 0;
    for(var i=0; i<len; i++){
        sum = sum + arr[i];
    }
    var average = sum / len;
    return average;
}

var arr = [1,2,3];
var arrLen = arr.length;

var avg = make_avg(arr, arrLen);
console.log(avg);
