function isBestFriend(obj1, obj2){
    if(typeof(obj1) === "object" && typeof(obj2) === "object"){
        if(obj1.name === obj2.friend && obj1.friend === obj2.name){
            return true;
        }
        else return false; 
    }
    else return "Please provide 2 objects."
}
const obj1 = {
    name: "John", friend: "Vallagena"
}
const obj2 = {
    name: "Vallagena", friend: "John"
}
console.log(isBestFriend(obj1,obj2));