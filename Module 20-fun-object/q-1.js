function foo(){
    console.log("foo");
    bar();
}
function bar(){
    console.log("bar");
}

var output = foo();
console.log(output);