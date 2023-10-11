const numbers = [12, 56, 87, 44];
const filtered = numbers.filter(x => x>50);
console.log(filtered);

const products = [
    {id: 1, name: "mobile", price: 34000},
    {id: 1, name: "laptop", price: 67000},
    {id: 1, name: "tv", price: 45000}
]

const product = products.filter(p => p.price < 50000);
console.log(product);
// console.log(products);

// makes new array and set the values which fullfil condition