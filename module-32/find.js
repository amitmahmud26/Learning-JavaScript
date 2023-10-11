const numbers = [12, 56, 87, 44];
const filtered = numbers.find(x => x%2 === 0);
console.log(filtered);

const products = [
    {id: 1, name: "mobile", price: 34000},
    {id: 1, name: "laptop", price: 69000},
    {id: 1, name: "tv", price: 45000}
]

const product = products.find(p => p.price < 50000);
console.log(product);
// console.log(products);

// find the first value which fullfil conditon and then return only that one value