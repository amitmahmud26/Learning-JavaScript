let fibo = [ ];
fibo.push(0);
fibo.push(1);

for(let i=2; i<15; i++){
    fibo.push(fibo[i-1]+fibo[i-2]);
}
console.log(fibo);
console.log("a"+"b");
