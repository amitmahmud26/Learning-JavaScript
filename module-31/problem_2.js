const array = (friends) => {
    let newArray = [];
    for(let friend of friends){
        if(friend.length % 2 == 0){
            newArray.push(friend);
        }
    }
    return newArray;
}

const friends = ["abul", "kashem", "sabbir", "shahin", "jdu", "ram", "sham"];
const evenFriends = array(friends);
console.log(evenFriends);

