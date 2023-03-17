// Write a function that takes two strings, return true if they are anagrams of one another
function anagrams(str1, str2){
    let arr1= str1.split('').sort().join();
    let arr2= str2.split('').sort().join();
    
    if(arr1==arr2){
        return true;
    }
    else{
        return false;
    }
}
console.log(anagrams("race","care"));