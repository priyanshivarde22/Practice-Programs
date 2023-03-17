//  Write a function that takes a string as input and returns the longest substring that contains only unique characters.

function uniqueCharecter(str1){
    var str = str1;
    var uniqe = "";
    
    for(var i=0; i< str.length;i++){
        
        if(uniqe.indexOf(str.charAt(i)) == -1){

            uniqe += str[i];
        }
       
    }
    return uniqe ;
}

console.log(uniqueCharecter("priyanshivarde"));