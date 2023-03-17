// Pannumber

function panNum(){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let nums = "0123456789";
    let pannumber= ""
    for(let i = 1; i<=5; i++ ){
        
    let   firstFiveApha = Math.floor(Math.random() * alphabets.length);
     pannumber += alphabets[firstFiveApha]
        
    }   
    
    for( let x=1;x<=4;x++){
        
        let secondFourDigits = Math.floor(Math.random() * nums.length);
         pannumber += nums[secondFourDigits]
        }
        
    for(let y=1;y<=1;y++){
        let lastLetter = Math.floor(Math.random() * alphabets.length);
        pannumber += alphabets[lastLetter]
    }
    
    return pannumber ;
}
 console.log(panNum());