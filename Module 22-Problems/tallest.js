function tallest(heights){
    let highest = heights[0];
    for(let i=0; i<heights.length; i++){
        if(heights[i] > highest){
            highest = heights[i];
        }
    }
    return highest;
}
const heights = [1,4,5,22,66,570,170];
console.log(tallest(heights));