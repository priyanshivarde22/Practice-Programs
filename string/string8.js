  // Covert first letter of every word in string to uppercase

  function upperCase(str){
    let words = str.split(" ");
    let x;
    for(let i=0;i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    x = words.join(" ")
    return x;
}
const str = "sarvajanikk college of engineering and technology"
console.log(upperCase(str))
