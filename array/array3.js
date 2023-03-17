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