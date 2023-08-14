// power
const result = Math.pow(9,3);
console.log(result);

// absolute value
const result2 = Math.abs(20-45);
console.log(result2);

// ceiling
const result3 = Math.ceil(3.004);
console.log(result3);

// ceiling
const result4 = Math.floor(4.99);
console.log(result4);

// round
const result5 = Math.round(5.499);
console.log(result5);

// random number from 0-6. 20 times
for(let i=0; i<20; i++){
    console.log(Math.round(Math.random()*6));
}