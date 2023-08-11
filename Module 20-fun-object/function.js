// unparameterized
function vallagena(){
    console.log("Amar vallagena ki kori bol? -_-");
}
console.log(vallagena());

// parameterized
function bringSingara(totalTaka){
    var singaraPrice = 10;
    var quantity = totalTaka / singaraPrice;
    return quantity;
}

var taka = 200;
console.log(bringSingara(taka), "ta singara kha!");