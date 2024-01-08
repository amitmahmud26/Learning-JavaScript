function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser(data){
    console.log(data)
    for(const user of data){
        console.log(user.name)
    }
}