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


//      1. Write a function that takes an array of numbers from 1 to n with one
//  number missing, and returns the missing number. For example,
//  given an array [1, 2, 3, 5], the function should return 4. 


function subseq(arr1, arr2,x,y)
{
   
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++)
            if (arr2[i] == arr1[j]){
                break;
            }
        else if (j == x) {
            return false;
        }
    }
    return true;
}


// product of three max element in array

 function product(arr){
    let x= arr.sort();
    let  sum =1;
    let n = 3;
    let  result = x.slice(-n);
    for (var i=0; i<result.length; i++) {
        sum = sum * result[i];
    } 
    return sum;
}
const arr = [1,5,6,4,9,3,2];
console.log(product(arr));


//  comman element of two array

function arraysCommon(array1, array2) {
  return array1.filter(x => array2.includes(x));
}
const array1 = [1,2,3,4,5,6]
const array2 = [3,4,5,6,7,8]
console.log(arraysCommon(array1,array2))

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

//Write a program that takes a matrix (an array of arrays) as input and returns its transpose (rows become columns and columns become rows).

var length = 4;

    function transpose(A , B) 
    {
        var i, j;
        for (i = 0; i < length; i++)
            for (j = 0; j < length; j++)
                B[i][j] = A[j][i]
    }

        var A = [ [ 1, 1, 1, 1 ], [ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [4, 4, 4, 4]]

        var B = Array(length)
        for(i=0;i<length;i++)
        B[i] =Array(length).fill(0)

        transpose(A, B)

        for (i = 0; i < length; i++) 
        {
            for (j = 0; j < length; j++)
            process.stdout.write(B[i][j] + " ")
            process.stdout.write("\n")
        }


                                    

