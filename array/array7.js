

//Implement a function to remove duplicates from an array without using any built-in functions.

function duplicateRemove(arr){
    let arr1=[];
    for(let i=0; i<arr.length;i++){
        
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
const arr= [1,2,3,4,1,5,1,5]
console.log(duplicateRemove(arr))