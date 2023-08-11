// var Me = 85;
// var Tom = 66;
// var Jane = 95;
// var Peter = 56;
// var John = 40;

var marks = [85, 66, 95, 56, 40];
console.log("Grades of Me, Tom, Jane, Peter and John are respectively: ")
for(var i=0; i<marks.length; i++){
    var mark = marks[i];
    if(mark >= 80){
        console.log("A");
    }
    
    else if(mark >= 60){
        console.log("B");
    }
    
    else if(mark >= 50){
        console.log("C");
    }
    
    else if(mark >= 40){
        console.log("D");
    }
    else if(mark <= 39){
        console.log("F");
    }
}

