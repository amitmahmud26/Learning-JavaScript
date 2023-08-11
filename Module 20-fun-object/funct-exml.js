function getAverate(assignment1, assignment2, assignment3){
    var totalMakrs = assignment1+assignment2+assignment3;
    var averageMarks = totalMakrs / 3;
    return averageMarks;
}

console.log("Assignment e verage paicho:", getAverate(90,76,80.5).toFixed(2));

function getSquare(num){
    var squareValue = num*num;
    return squareValue;
}

var num = 10;
console.log("Square value of", num, "is", getSquare(num));