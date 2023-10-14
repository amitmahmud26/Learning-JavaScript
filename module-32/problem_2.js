// filter

const nums = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = nums.filter(f => f%10 === 0);
console.log(divisibleBy10);

// find

const divisibleBy10Find = [];

for (let i = 0; i < nums.length; i++) {
    // Find the next element divisible by 10 starting from the current index
    let divisibleBy10 = nums.slice(i).find(f => f % 10 === 0);

    // If found, push it to the array and update the starting index
    if (divisibleBy10 !== undefined) {
        divisibleBy10Find.push(divisibleBy10);
        i += nums.slice(i).indexOf(divisibleBy10); // Update the index
    }
}

console.log(divisibleBy10Find);