function bestFriend(names){
    let bigName = "";
    for(let i=0; i<names.length; i++){
        if(bigName.length < names[i].length){
            bigName = names[i];
        }
    }
    return bigName;
}
const names = ["sajid", "mamun", "kalam", "jubayer bin rased", "Chinku"];
const largestName = bestFriend(names);
console.log(largestName);