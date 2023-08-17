function isJavaScriptFile(str){
    let string = str;
    let last3 = string.slice(-3);
    if(last3 === ".js"){
        return true;
    }
    else return false;
}
const fileName1 = "vallagena.js";
const fileName2 = "vallagena.cpp";
console.log(isJavaScriptFile(fileName1));
console.log(isJavaScriptFile(fileName2));