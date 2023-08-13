function fact(num){
    let sum = 1;
    for(let i=num; i>0; i--){
        sum = sum * i;
    }
    return sum;
}
var num = 5;
var factorial = fact(num);
console.log("The factorial of", num, "is", factorial);