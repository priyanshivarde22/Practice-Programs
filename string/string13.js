// Write a program for removing character from string at specific position.

function removeCharString(str){
    x= str.split('')
    x.splice(2,1)
    result=x.join('')
    console.log(result)
    }
    removeCharString("priyanshi")