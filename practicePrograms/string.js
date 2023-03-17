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


// Write a function that takes a string as input and returns true if the
// string contains all the letters of the alphabet, and false otherwise.

const x = "thequickbrownfoxjumpsoverthelazydog";
const letters = /^[A-Za-z]+$/ ;
 
 if(x.match(letters)){
    console.log("it conains all letters");
 }
 else{
    console.log("It does not contain every letter");
 }

 /* write javascript program to print   1 for 1 
                                       22 for 2
                                       333 for 3
                                       4444 for 4 */
 function createFun(n){
    let sum =0;
 for(let i=1;i<=n;i++){
    let num = "";
 for(let j=0; j<i;j++){
     num += i.toString();
  }
 sum += parseInt(num);
                                                                              
}
    return sum;
   }
console.log(createFun(3));


// alphabetical order

function alphaOrder(str){
    
    return str.split('').sort().join('')
}
console.log(alphaOrder("priyanshivarde"))


// Pannumber

function panNum(){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "0123456789";
    let pannumber= ""
    for(let i = 1; i<=5; i++ ){
        
    let   firstFiveApha = Math.floor(Math.random() * alphabets.length);
     pannumber += alphabets[firstFiveApha]
        
    }   
    
    for( let x=1;x<=4;x++){
        
        let secondFourDigits = Math.floor(Math.random() * nums.length);
         pannumber += nums[secondFourDigits]
        }
        
    for(let y=1;y<=1;y++){
        let lastLetter = Math.floor(Math.random() * alphabets.length);
        pannumber += alphabets[lastLetter]
    }
    
    return pannumber ;
}
 console.log(panNum());


 // the fizz buzz challange

function fizzBuzzChallange(){
    
    for(let i=1; i<=101;i++){
        
        if(i % 3== 0){
            console.log("Fizz");
        }
        else if(i % 5==0){
            console.log("Bizz");
        }
    }
    
}

fizzBuzzChallange();


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


    // Covert first letter of every word in string to uppercase

function upperCase(str){
    let words = str.split(" ");
    let x;
    for(let i=0;i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    x = words.join(" ")
    return x;
}
const str = "sarvajanikk college of engineering and technology"
console.log(upperCase(str))

   // Promise 

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(5), 1000);
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  });
                                                                        

// print repeated character of string

function repeatChar(str){
    console.log(str)
    let a2 = []
    let a3 =[]
    for(let i=0; i< str.length;i++){
        const char = str[i]
        if(a2.includes(char)){
            if(!a3.includes(char)){
                a3.push(char)
            }
        }
        else {
            a2.push(char);
        }
    }
    console.log(a3)
    console.log(a2)
}
const str = "priyanshiivarde";
repeatChar(str);

//Generate unique email
function genEmail() {
    const d1 = new Date().getTime();
    var email = 'test' + d1 +'@gamil.com';
    return email
    }
console.log(genEmail());
