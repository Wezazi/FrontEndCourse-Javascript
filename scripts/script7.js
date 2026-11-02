

const account = {
    accountName: "John Doe",
    balance: 5,

    getAccountName(){
        const {accountName} = this;
        console.log(accountName);
    },

    getBalance(){
        const {balance} = this;
        console.log(`Balance: $${balance}`);
    },


    withdrawal(){
        let withdrawal = parseFloat(prompt("Enter the amount you want to withdraw").trim());

        if(!withdrawal || isNaN(withdrawal)){ // The reverse of "if (withdrawal && !isNaN(withdrawal)){}". || is an OR operator in javascript, not concatenation
            console.log("Not a valid input");
            return;
        }

        if (withdrawal > this.balance){
            this.accountError();
        }
        else{
            this.balance -= withdrawal;
        }
    },

    deposit(){
        let deposit = parseFloat(prompt("Enter the amount you want to deposit").trim());

        if(!deposit || isNaN(deposit)){
            console.log("Not a valid input");
            return;
        }

        this.balance += deposit;
    },


    accountError(){
        console.log("ERROR: You tried withdrawing more money than you have")
    }
}


function atm(){
    const input = parseInt(prompt("Select a choice 1.) Check account name 2.) Check Balance 3.) Make a deposit 4.) Make a withdrawal 5.) Exit"));
    
    
    switch(input){
        case 1:
            account.getAccountName();
            break; //exits the switch statement, and not the function
        case 2:
            account.getBalance();
            break;
        case 3:
            account.deposit();
            break;
        case 4:
            account.withdrawal();
            break;
        case 5:
            return //Exits the function, similar to exit() in python
        default:
            console.log("invalid input")
            break
            
    }

    atm(); //display the choices again unless you exit the function
}

atm();
