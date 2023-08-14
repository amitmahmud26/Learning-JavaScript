const lyrics = "tumi bondhu kala pakhi ami jEno kiiiii, bosonto kale tomay bolte eshechi";
const searchString = "Ami Jeno kIiiii";

const lowerSearchString = searchString.toLowerCase();
const lowerLyrics = lyrics.toLowerCase();
const doesExists = lowerLyrics.includes(lowerSearchString);
console.log(doesExists);

// finding with index

if(lyrics.indexOf('bonddhu') !== -1){
    console.log('Exists.');
}
else
    console.log("doesn't exist")
// console.log(lyrics.indexOf('bondhu'));