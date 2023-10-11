const numbers = [12, 56, 87, 44];
const devided = numbers.map(x => x / 2);
// const fixed = devided.fixed(2);
// console.log(devided);

const products = [
    {id: 1, name: "mobile", price: 34000},
    {id: 1, name: "laptop", price: 67000},
    {id: 1, name: "tv", price: 45000}
]

const product = products.map(p => p.name);
console.log(product);

const product2 = products.map(p => console.log(p.price));