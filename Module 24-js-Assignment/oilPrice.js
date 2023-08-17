function oilPrice(diesel, petrol, octane){
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    return diesel*dieselPrice + petrol*petrolPrice + octane*octanePrice;
}

const diesel = 10;
const petrol = 7;
const octane = 2;
const totalPrice = oilPrice(diesel, petrol, octane);
console.log(totalPrice);