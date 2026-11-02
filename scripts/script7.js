

const account = {
    accountName: "John Doe",
    balance: 5,

    getBalance(){
        const {balance} = this;
        console.log(`Balance: $${balance}`);
    },

    deposit(){
        let deposit = parseFloat(prompt("Enter the amount you want to deposit").trim());
        this.balance += deposit;
    },

    withdrawal(){
        let withdrawal = parseFloat(prompt("Enter the amount you want to withdraw"));
        this.balance -= withdrawal;
    },

    getAccountName(){
        const {accountName} = this;
        console.log(accountName);
    },


}

account.getBalance();
//account.deposit();
//account.withdrawal();

account.getBalance();

/*
This changes the value of the local balance variable instead of the object balance property value:

deposit(){
        let {balance} = this;
        let deposit = parseFloat(prompt("enter the amount you want to deposit").trim());
        balance += deposit;
    }
*/