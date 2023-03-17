// Write a function that takes two arrays of integers as input and returns an array of their intersection.

function intersectionOfArray(arr1,arr2){
         var set1 = new Set(arr1);
         var set2 = new Set(arr2);
         var intersection = [];
        for(let i of set2){
            if(set1.has(i)){
                intersection.push(i);
            }
        }
       return intersection;
    }
    const arr1 = [1,3,4,5,6,7,8];
    const arr2 = [4,5,6,7,8,9,0];
    console.log(intersectionOfArray(arr1,arr2));

