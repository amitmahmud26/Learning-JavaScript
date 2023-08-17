// 5! = 120
function fact(num){
    if(num == 1){
        return 1;
    }
    return num * fact(num-1);
}
const num = 5;
var sum = fact(num);
console.log(sum);