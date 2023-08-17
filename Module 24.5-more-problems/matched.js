const products = [
    {id: 1, name: "xiaomi phone", price: "20000"},
    {id: 2, name: "iPhone", price: "80000"},
    {id: 3, name: "nexus phone", price: "12000"},
    {id: 4, name: "web phone", price: "5500"},
    {id: 5, name: "macbook air", price: "12000"},
    {id: 6, name: "vallagena phone", price: "5000"},
    {id: 7, name: "uiu phone", price: "39000"},
    {id: 8, name: "university tuition fees", price: "200000"},
];
function matchedProduct(products, search){
    let matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProduct(products, "phone");

console.log(result);