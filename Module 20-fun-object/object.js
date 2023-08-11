var student = {
    university: 'UIU',
    id: '011213078',
    cgpa: 3.71
}

console.log(student);
console.log(student.university);
// properties
console.log(Object.keys(student));
// property values
console.log(Object.values(student));

// finding individual property value
console.log(student['cgpa']);
console.log(student);
// changing property values
student.cgpa = '3.92';
console.log(student);