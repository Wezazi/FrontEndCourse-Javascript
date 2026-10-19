

function isValidPassword(username, password){
    if (password.includes(" ") == false && password.length >=8 && password != username){ // Don't use parenthases on .length() it's a property and not a method
        return true;
    }
    else{
        return false;
    }
}

let username = prompt("enter your username");
let password = prompt("enter your password");

let check = isValidPassword(username, password);

if (check == true){
    console.log("Your password meets the requirements")
}
else{
    console.log("your password do not meet the requirements")
}

