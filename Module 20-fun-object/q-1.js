function bar(){
    console.log("bar");
}
function foo(){
    console.log("foo");
    bar();
}

var output = foo();
console.log(output);