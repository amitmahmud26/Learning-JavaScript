// odd array needs to be changed to even array

// using map
const odds = [1,3,5,7,9];
const evens = odds.map(e => e+1);
console.log(evens);

// using loop
const evenss = [];
for(even of evens){
    evenss.push(even+1);
}
console.log(evenss);