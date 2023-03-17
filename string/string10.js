//Generate unique email
function genEmail() {
    const d1 = new Date().getTime();
    var email = 'test' + d1 +'@gamil.com';
    return email
    }
console.log(genEmail());