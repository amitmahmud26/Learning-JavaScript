// Multi-layer discount price calculation
// if ticketNumber <= 100, perTicket = 100
// if ticketNumber <= 100, perTicket = 100
/*
    first 100: 100tk
    101 - 200: 90tk
    200 - rest: 70tk
*/

function ticketPrice(ticketNumber){
    let totalPrice = 0;
    if(ticketNumber <= 100){
        totalPrice = 100*ticketNumber;
    }
    else if(ticketNumber > 100 && ticketNumber <=200){
        totalPrice = 100*100 + (ticketNumber-100)*90;
    }
    else
        totalPrice = 100*100 + 100*90 + (ticketNumber-200)*70;
    return totalPrice;

}
const ticketNumber = 550;
const totalPrice = ticketPrice(ticketNumber);
console.log(totalPrice);