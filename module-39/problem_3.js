const calculation = nums => {
    let sum = 0;
    for(let num of nums){
        const sqr = Math.pow(num, 2);
        sum += sqr;
    }
    const avg = sum / nums.length;
    // avg.toFixed(2);
    return avg.toFixed(2);
}
const numArray = [1,2,3];
const result = calculation(numArray);
console.log(result);

