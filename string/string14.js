// 1. Write a program that takes a string as input and capitalizes the first letter of each sentence.

function capitalized(str){
    str1=str.split(" ");
    for(let i=0; i<str1.length ; i++){
        str1[i]=str1[i][0].toUpperCase() +str1[i].substr(1)
    }
    
    console.log(str1.join(" "))
}
capitalized("hello this is priyanshi varde")