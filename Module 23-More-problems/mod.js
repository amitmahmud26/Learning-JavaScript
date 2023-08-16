// Choose the topic according to the (sum of students id of the team)%10 + 1 Formula
// finding out group topic
const id1 = 11213078;
const id2 = 11213070;
const id3 = 11213100;
const id4 = 11213110;

var result = (id1+id2+id3+id4) % 10 + 1;
console.log(result);
