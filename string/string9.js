// print repeated character of string

function repeatChar(str){
    console.log(str)
    let a2 = []
    let a3 =[]
    for(let i=0; i< str.length;i++){
        const char = str[i]
        if(a2.includes(char)){
            if(!a3.includes(char)){
                a3.push(char)
            }
        }
        else {
            a2.push(char);
        }
    }
    console.log(a3)
    console.log(a2)
}
const str = "priyanshiivarde";
repeatChar(str);