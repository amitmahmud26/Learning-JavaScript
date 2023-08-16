function removeDuplicates(names){
    let uniqueNames = [];
    for(let i=0; i<names.length; i++){
        if(uniqueNames.includes(names[i])){
            continue;
        }
        uniqueNames.push(names[i]);
    }
    return uniqueNames;
}
let names = ["abul", "babul", "sabul", "babul", "abul", "jabul", "chabul", "sabul"];
const afterRemoving = removeDuplicates(names);
console.log(afterRemoving);

