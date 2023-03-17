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
