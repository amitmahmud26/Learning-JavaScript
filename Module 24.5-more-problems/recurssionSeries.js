// 1+2+3+4+5;
function add(num){
    if(num == 1){
        return 1;
    }
    return num + add(num-1);
}
const num = 5;
var sum = add(num);
console.log(sum);