var bookPrice = [100, 200, 300, 400, 150, 50, 75, 900];
for(var i=0; i<bookPrice.length; i++){
    if(bookPrice[i] > 200){
        continue;
    }
    console.log(bookPrice[i]);
}