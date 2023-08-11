var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2 && num1 > num3){
    console.log("Number 1 is greater.");
}
else if(num2 > num1 && num2 > num3){
    console.log("Number 2 is greater.");
}
else{
    console.log("Number 3 is greater.");
}

var side1 = 5;
var side2 = 2;
var side3 = 5;

if(side1 == side2 && side1 == side3){
    console.log("The trianagle is Equilateral");
}
else if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log("The trianagle is Isosceles");
}
else{
    console.log("The trianagle is not Isosceles");
}