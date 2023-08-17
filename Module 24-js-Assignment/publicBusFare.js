function publicBusFare(passenger){
    if(typeof(passenger) === "number"){
        const microAndPublicBus = passenger % 50;
        const publicBus = microAndPublicBus % 11;
        return publicBus * 250;
    }
    else return "Please provide a number.";
}
const passenger = 130;
const busFare = publicBusFare(passenger);
console.log(busFare);