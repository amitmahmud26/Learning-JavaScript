// Write foo, bar, foobar if divisible by 3 or 5 or both

for(let i=1; i<=50; i++){
    if(i%3 == 0){
        if(i%5 == 0){
            console.log("foobar");
            continue;
        }
        else
            console.log("foo");
            continue;
    }
    else if(i%5 == 0){
        if(i%3 == 0 && i%5 == 0){
            console.log("foobar");
            continue;
        }
        else
            console.log("bar");
            continue;
    }
    else
    console.log(i);
}