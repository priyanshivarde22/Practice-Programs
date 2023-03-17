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