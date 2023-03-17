//  remove vowels from string

function removeVowels(str){
    let alphabets = ['A','E','I','O','U','a','e','i','o','u']
    let result = ""
    for(let i=0; i<str.length;i++){
    if(!alphabets.includes(str[i])){
        result += str[i]
    }
    
    }
    return result;
    }
    let str = "priyanshivarde"
    console.log(removeVowels(str))
