function reversed(str){
    let reversedStr = "";
    for(let i=str.length-1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

function reverseByWord(str){
    let str2 = str.split(" ");
    let str3 = "";
    for(let i=str2.length-1; i>=0; i--){
        str3 = str3 + str2[i] +" ";
    }
    return str3;
}
const str = "I am a good boy";
console.log("The String:",str);
console.log("Reversed String:",reversed(str));
console.log("Reversed by Word String:",reverseByWord(str));
// reverseByWord(str);

