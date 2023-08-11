var student = {
    university: 'UIU',
    id: '011213078',
    cgpa: 3.71
}
var studentKeys = Object.keys(student);
console.log(studentKeys);

var studentValues = Object.values(student);
console.log(studentValues);

for(var i=0; i<studentKeys.length; i++){
    var propertyName = studentKeys[i];
    console.log(propertyName);
    var propertyValue = student[studentKeys[i]];
    console.log(propertyValue);
}