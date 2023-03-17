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
