// Write a program for function overloading.

function sum(){
    if(arguments.length==0){
        console.log("Enter two value")
    }
    else if(arguments.length==1){
        console.log("Enter two value")
    }
    else{
        let result=0
        for(let i=0;i<arguments.length;i++){
            result += arguments[i];
        }
         console.log(result);
    }
   
}

sum(2,3)
sum(2,3,4)
sum(2,5,6)