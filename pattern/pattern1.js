function squre(n){
    // defining an empty string
    let string = "";
    
    for(let i = 0; i < n; i++) { 
      for(let j = 0; j < n; j++) { 
        string += "*";
      }
      string += "\n";
    }
    return string;
    }
    console.log(squre(5));