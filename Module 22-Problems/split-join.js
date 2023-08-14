const lyrics = "tumi bondhu kala pakhi ami jEno kiiiii. bosonto kale tomay bolte eshechi";
console.log(lyrics);
const sentence = lyrics.split(".");
console.log(sentence);
const parts = lyrics.split(" ");
console.log(parts);
const letter = lyrics.split("");
console.log(letter);

// slice

console.log(lyrics.slice(5,11));
console.log(lyrics.substring(5,11)); // same as slice

// join

const lines = [
    "tumi bondhu kala pakhi",
    "ami jeno ki",
    "bosonto kale tomay",
    "bolte parini"
]

console.log(lines);

console.log(lines.join(". "));