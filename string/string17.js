//Write a JavaScript function to test whether the character at the provided index is upper case.


function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }
   console.log(isUpperCaseAt('Js STRING EXERCISES', 1));