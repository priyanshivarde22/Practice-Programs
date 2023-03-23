function downwardTriagle(n){
    let string = "";
    for (let i = 0; i < n; i++) {
      // printing star
      for (let k = 0; k < n - i; k++) {
        string += "*";
      }
      string += "\n";
    }
    return string;
    }
    console.log(downwardTriagle(5));