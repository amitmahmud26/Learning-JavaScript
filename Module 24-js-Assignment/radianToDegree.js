function radianToDegree(radValue){
    if(typeof(radValue) !== "number"){
        return "Please enter a number."
    }
    else{
        const pi = 3.1416;
        let deg = radValue*(180/pi);
        return deg;
    }
}
const radValue = 5;
const degValue = radianToDegree(radValue);
console.log(degValue);
// console.log(typeof(radValue));