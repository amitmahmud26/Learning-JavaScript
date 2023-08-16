const phones = [
    { name:"Samsung",camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 12000, color: 'silver'},
    { name: 'iPhone', camera: 10, storage: '32gb', price: 122000, color: 'silver'},
    { name: 'Oppo', camera: 10, storage: '32gb', price: 32000, color: 'silver'},
    { name: 'Vivo', camera: 10, storage: '32gb', price: 29000, color: 'silver'},
    { name: 'HTC', camera: 10, storage: '32gb', price: 43000, color: 'silver'},
    { name: 'Huawei', camera: 10, storage: '32gb', price: 55000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapestPhone = phones[0];
    for(let i=0; i<phones.length; i++){
        if(phones[i].price < cheapestPhone.price){
            cheapestPhone = phones[i];
        }
    }
    console.log(cheapestPhone);
}
const mySelection = cheapestPhone(phones);